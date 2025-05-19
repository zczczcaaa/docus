import { resolve } from 'node:path'
import { type ArgsDef, defineCommand, runMain } from 'citty'
import { getNuxtConfig } from './setup'
import type { CLIOptions } from './types'

export function createCLI(opts: CLIOptions) {
  const sharedArgs: ArgsDef = {
    dir: {
      type: 'positional',
      description: 'Docs directory',
      required: true,
      default: '.',
    },
  }

  const init = defineCommand({
    meta: {
      name: 'init',
      description: 'Initialize a fresh Docus project, alias of `nuxi init -t hub`.',
    },
    args: { ...sharedArgs },
    async setup({ args }) {
      const dir = resolve(args.dir as string)

      const { runCommand } = await import('nuxi')
      await runCommand('init', [dir, '-t', 'gh:nuxt-themes/docus#feat/docus-v2/.starter', dir])
    },
  })

  const dev = defineCommand({
    meta: {
      name: 'dev',
      description: 'Start docs in development mode',
    },
    args: { ...sharedArgs },
    async setup({ args }) {
      const dir = resolve(args.dir as string)
      const nuxtConfig = await getNuxtConfig(dir, {
        ...opts.setup,
        dev: true,
      })

      const { runCommand } = await import('nuxi')
      await runCommand('dev', [dir, '--no-fork', '--port', process.env.PORT || '4000'], { overrides: nuxtConfig })
    },
  })

  const build = defineCommand({
    meta: {
      name: 'build',
      description: 'Build docs for production',
    },
    args: { ...sharedArgs },
    async setup({ args }) {
      const dir = resolve(args.dir as string)
      const nuxtConfig = await getNuxtConfig(dir, opts.setup)

      const { runCommand } = await import('nuxi')
      await runCommand('build', [dir], { overrides: nuxtConfig })
    },
  })

  const main = defineCommand({
    meta: {
      name: opts.name,
      description: opts.description,
    },
    subCommands: {
      init,
      dev,
      build,
    },
  })

  return {
    runMain: () => runMain(main),
  }
}
