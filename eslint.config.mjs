import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import stylistic from '@stylistic/eslint-plugin'
import parserTs from '@typescript-eslint/parser'

export default createConfigForNuxt({
  dirs: {
    src: [
      './app',
    ],
  },
  features: {
    tooling: true,
    stylistic: true,
  },
}, {
  files: [
    'cli/**/*.ts',
  ],
  plugins: {
    '@stylistic': stylistic,
  },
  languageOptions: {
    parser: parserTs,
  },
})
