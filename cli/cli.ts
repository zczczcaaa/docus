import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { type ArgsDef, defineCommand, runMain } from 'citty'
import { setupDocs } from './setup'
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

  const dev = defineCommand({
    meta: {
      name: 'dev',
      description: 'Start docs in development mode',
    },
    args: { ...sharedArgs },
    async setup({ args }) {
      const { appDir, nuxtConfig } = await setupDocs(args.dir as string, {
        ...opts.setup,
        dev: true,
      })

      process.chdir(appDir)

      const { runCommand } = await import('nuxi')
      await runCommand('dev', [appDir, '--no-fork', '--port', process.env.PORT || '4000'], { overrides: nuxtConfig })
    },
  })

  // const build = defineCommand({
  //   meta: {
  //     name: 'build',
  //     description: 'Build static docs for production',
  //   },
  //   args: { ...sharedArgs },
  //   async setup({ args }) {
  //     const { appDir, nuxtConfig } = await setupDocs(args.dir, opts.setup)

  //     process.chdir(appDir)

  //     const { runCommand } = await import('nuxi')
  //     await runCommand('generate', [appDir], { overrides: nuxtConfig })
  //   },
  // })

  const main = defineCommand({
    meta: {
      name: opts.name,
      description: opts.description,
    },
    subCommands: {
      dev,
      // build,
    },
  })

  return {
    runMain: () => runMain(main),
  }
}
