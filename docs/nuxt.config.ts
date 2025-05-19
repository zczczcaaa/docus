export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Docus',
    },
  },
  css: ['./assets/css/main.css'],
  site: {
    url: 'https://docus-v2.vercel.app',
    name: 'Docus',
  },
})
