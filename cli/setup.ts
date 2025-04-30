import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { readFile } from 'node:fs/promises'
import { loadConfig } from 'c12'
import type { NuxtConfig } from 'nuxt/config'
import type { DocsOptions } from './types'
import { getGitBranch, getLocalGitInfo } from './git'

declare global {
  const __DOCS_CWD__: string
}

const appDir = fileURLToPath(new URL('../app', import.meta.url))

const pkgDir = fileURLToPath(new URL('..', import.meta.url))

export async function setupDocs(docsDir: string, opts: DocsOptions = {}) {
  const meta = await getPackageJsonMetadata(docsDir)

  const { config: docsconfig } = await loadConfig({
    name: 'docs',
    cwd: docsDir,
    defaults: {
      url: inferSiteURL(),
      ...opts.defaults,
      ...meta,
    },
  })

  // Normalize dir
  docsconfig.dir = docsDir = resolve(docsconfig.dir || docsDir)

  // @ts-expect-error __DOCS_CWD__ is not defined
  global.__DOCS_CWD__ = resolve(docsconfig.dir, 'content')

  if (!docsconfig.url && !opts.dev) {
    throw new Error('`url` config is required for production build!')
  }

  const docsSrcDir = resolve(docsDir, '.docus')
  // Module to fix layers (force add .docs as first)
  // const fixLayers = (_, nuxt: NuxtConfig) => {
  //   nuxt.options._layers.unshift({
  //     cwd: docsSrcDir,
  //     config: {
  //       rootDir: docsSrcDir,
  //       srcDir: docsSrcDir,
  //     },
  //   })
  // }

  // Prepare loadNuxt overrides
  const nuxtConfig: NuxtConfig = {
    compatibilityDate: '2025-04-24',
    rootDir: docsSrcDir,
    srcDir: docsSrcDir,
    extends: [appDir],
    modulesDir: [resolve(pkgDir, 'node_modules'), resolve(docsDir, 'node_modules')],
    modules: [],
    docs: docsconfig,
    appConfig: {
      header: {
        title: docsconfig.name || '',
      },
      github: {
        ...(await getLocalGitInfo(docsDir)),
        branch: getGitBranch(),
      },
      site: {
        name: docsconfig.name || '',
        description: docsconfig.description || '',
        url: docsconfig.url,
      },
    },
    nitro: {
      // static: true,
      publicAssets: [{ baseURL: '/', dir: resolve(docsDir, 'public'), maxAge: 0 }],
      // serverAssets: [{
      //   baseName: 'public',
      //   dir: resolve(docsDir, '.docs/public'),
      // }],
    },
  } as NuxtConfig

  return {
    docsDir,
    appDir,
    nuxtConfig,
  }
}

function inferSiteURL() {
  // https://github.com/unjs/std-env/issues/59
  return (
    process.env.NUXT_PUBLIC_SITE_URL
    || (process.env.NEXT_PUBLIC_VERCEL_URL && `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) // Vercel
    || process.env.URL // Netlify
    || process.env.CI_PAGES_URL // Gitlab Pages
    || process.env.CF_PAGES_URL // Cloudflare Pages
  )
}

async function getPackageJsonMetadata(docsDir: string) {
  try {
    const packageJson = await readFile(resolve(docsDir as string, 'package.json'), 'utf-8')
    const parsed = JSON.parse(packageJson)
    return {
      name: parsed.name,
      description: parsed.description,
    }
  }
  catch {
    return {
      name: 'docs',
    }
  }
}
