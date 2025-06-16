import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import type { NuxtConfig } from 'nuxt/config'
import type { DocsOptions } from './types'
import { getGitBranch, getGitEnv, getLocalGitInfo } from './git'
import { getPackageJsonMetadata } from './utils'

declare global {
  const __DOCS_DIR__: string
}

const appDir = fileURLToPath(new URL('../app', import.meta.url))

const pkgDir = fileURLToPath(new URL('..', import.meta.url))

export async function getNuxtConfig(dir: string, _opts: DocsOptions = {}) {
  const meta = await getPackageJsonMetadata(dir)

  // @ts-expect-error __DOCS_DIR__ is not defined
  global.__DOCS_DIR__ = resolve(dir, 'content')

  const gitInfo = await getLocalGitInfo(dir) || getGitEnv()

  // Prepare loadNuxt overrides
  return {
    compatibilityDate: '2025-04-24',
    extends: [appDir],
    modulesDir: [resolve(pkgDir, 'node_modules'), resolve(appDir, 'node_modules')],
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
        titleTemplate: `%s - ${meta.name}`,
        title: meta.name || '',
        description: meta.description || '',
      },
      toc: {},
    },
  } as NuxtConfig
}
