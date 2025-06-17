import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import type { NuxtConfig } from 'nuxt/config'
import type { DocsOptions } from './types'

declare global {
  const __DOCS_DIR__: string
}

const appDir = fileURLToPath(new URL('../app', import.meta.url))

const pkgDir = fileURLToPath(new URL('..', import.meta.url))

export async function getNuxtConfig(dir: string, _opts: DocsOptions = {}) {
  // @ts-expect-error __DOCS_DIR__ is not defined
  global.__DOCS_DIR__ = resolve(dir, 'content')

  // Prepare loadNuxt overrides
  return {
    compatibilityDate: '2025-06-17',
    extends: [appDir],
    modulesDir: [resolve(pkgDir, 'node_modules'), resolve(appDir, 'node_modules')],
  } as NuxtConfig
}
