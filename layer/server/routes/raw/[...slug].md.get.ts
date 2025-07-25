import { withLeadingSlash } from 'ufo'
import { stringify } from 'minimark/stringify'
import { queryCollection } from '@nuxt/content/nitro'
import type { Collections } from '@nuxt/content'

export default eventHandler(async (event) => {
  const slug = getRouterParams(event)['slug.md']
  if (!slug?.endsWith('.md')) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }

  const path = withLeadingSlash(slug.replace('.md', ''))
  const config = useRuntimeConfig(event).public

  let collectionName = 'docs'
  if (config.i18n?.locales) {
    const pathSegments = path.split('/').filter(Boolean)
    const firstSegment = pathSegments[0]

    const availableLocales = config.i18n.locales.map((locale: string | { code: string }) =>
      typeof locale === 'string' ? locale : locale.code,
    )

    if (firstSegment && availableLocales.includes(firstSegment)) {
      collectionName = `docs_${firstSegment}`
    }
    else if (config.i18n.defaultLocale) {
      collectionName = `docs_${config.i18n.defaultLocale}`
    }
  }

  const page = await queryCollection(event, collectionName as keyof Collections).path(path).first()
  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }

  // Add title and description to the top of the page if missing
  if (page.body.value[0]?.[0] !== 'h1') {
    page.body.value.unshift(['blockquote', {}, page.description])
    page.body.value.unshift(['h1', {}, page.title])
  }

  setHeader(event, 'Content-Type', 'text/markdown; charset=utf-8')
  return stringify({ ...page.body, type: 'minimark' }, { format: 'markdown/html' })
})
