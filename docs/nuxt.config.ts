export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Docus',
    },
  },
  css: ['../app/assets/css/main.css'],
  site: {
    url: 'https://docus-v2.vercel.app',
    name: 'Docus',
  },
  future: {
    compatibilityVersion: 4,
  },
  llms: {
    domain: 'https://docus-v2.vercel.app',
  },
})
