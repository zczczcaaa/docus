export default defineNuxtConfig({
  modules: ['@nuxtjs/plausible', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  site: {
    name: 'Docus',
  },
  compatibilityDate: '2025-07-18',
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  llms: {
    domain: 'https://docus.dev',
    title: 'Docus',
    description: 'Write beautiful docs with Markdown.',
    full: {
      title: 'Docus',
      description: 'Write beautiful docs with Markdown.',
    },
  },

})
