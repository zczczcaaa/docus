// Flag enabled when developing docs theme
const dev = !!process.env.NUXT_DOCS_DEV

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-og-image',
  ],
  devtools: {
    enabled: dev,
  },
  css: ['../app/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
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
