import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: {
        // @ts-expect-error __DOCS_CWD__ is not defined
        cwd: globalThis.__DOCS_CWD__,
        include: 'index.md',
      },
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        // @ts-expect-error __DOCS_CWD__ is not defined
        cwd: globalThis.__DOCS_CWD__,
        include: '**',
        exclude: ['index.md'],
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional(),
        })).optional(),
      }),
    }),
  },
})
