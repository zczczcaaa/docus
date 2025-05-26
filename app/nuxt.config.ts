import { defineNuxtConfig } from 'nuxt/config'

// Flag enabled when developing docs theme
const dev = !!process.env.NUXT_DOCS_DEV

// SSR enabled only for production build to save life (at least until our stack will be little bit lighter)
// const isProd = process.env.NODE_ENV === 'production'
// const ssr = Boolean(isProd || process.env.NUXT_DOCS_SSR)

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-og-image',
  ],
  devtools: {
    enabled: dev,
  },
  css: ['../assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
    },
  },
  icon: {
    provider: 'iconify',
  },
})
