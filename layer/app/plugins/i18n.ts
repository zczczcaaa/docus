import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtPlugin(async () => {
  const nuxtApp = useNuxtApp()

  const i18nConfig = nuxtApp.$config.public.i18n

  // If i18n is not enabled, fetch and provide the configured locale in app config
  if (!i18nConfig) {
    const appConfig = useAppConfig()
    const configuredLocale = appConfig.docus.locale || 'en'

    let locale = configuredLocale
    let resolvedMessages: Record<string, unknown>

    try {
      const localeMessages = await import(`../../i18n/locales/${configuredLocale}.json`)
      resolvedMessages = localeMessages.default || localeMessages
    }
    catch {
      console.warn(`[Docus] Missing locale file for "${configuredLocale}". Falling back to "en".`)
      locale = 'en'
      const fallback = await import('../../i18n/locales/en.json')
      resolvedMessages = fallback.default || fallback
    }

    nuxtApp.provide('locale', locale)
    nuxtApp.provide('localeMessages', resolvedMessages)

    return
  }

  addRouteMiddleware((to: RouteLocationNormalized) => {
    if (to.path === '/') {
      const cookieLocale = useCookie('i18n_redirected').value || i18nConfig.defaultLocale || 'en'

      return navigateTo(`/${cookieLocale}`)
    }
  })
})
