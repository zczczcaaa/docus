import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { readFile } from 'node:fs/promises'
import type { NuxtConfig } from 'nuxt/config'
import type { DocsOptions } from './types'
import { getGitBranch, getGitEnv, getLocalGitInfo } from './git'

declare global {
  const __DOCS_DIR__: string
}

const appDir = fileURLToPath(new URL('../app', import.meta.url))

const pkgDir = fileURLToPath(new URL('..', import.meta.url))

export async function getNuxtConfig(dir: string, _opts: DocsOptions = {}) {
  const meta = await getPackageJsonMetadata(dir)

  const fixLayers = (_, nuxt) => {
    nuxt.options._layers.unshift({
      cwd: dir,
      config: {
        rootDir: dir,
        srcDir: dir,
      },
    })
  }
  // @ts-expect-error __DOCS_DIR__ is not defined
  global.__DOCS_DIR__ = resolve(dir, 'content')

  const gitInfo = await getLocalGitInfo(dir) || getGitEnv()

  // Prepare loadNuxt overrides
  return {
    compatibilityDate: '2025-04-24',
    extends: [appDir],
    modulesDir: [resolve(pkgDir, 'node_modules'), resolve(appDir, 'node_modules')],
    modules: [fixLayers],
    appConfig: {
      header: {
        title: meta.name || '',
      },
      github: {
        owner: gitInfo?.owner,
        name: gitInfo?.name,
        url: gitInfo?.url,
        branch: getGitBranch(),
      },
      seo: {
        title: meta.name || '',
        description: meta.description || '',
      },
      site: {
        url: inferSiteURL(),
        name: meta.name || '',
      },
      toc: {},
    },
  } as NuxtConfig
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

async function getPackageJsonMetadata(dir: string) {
  try {
    const packageJson = await readFile(resolve(dir, 'package.json'), 'utf-8')
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
