import { defineNuxtModule } from 'nuxt/kit'
import { defu } from 'defu'
import { inferSiteURL, getPackageJsonMetadata } from '../../cli/utils'

export default defineNuxtModule({
  meta: {
    name: 'default-configs',
  },
  async setup(_options, nuxt) {
    const url = inferSiteURL()
    const meta = await getPackageJsonMetadata(nuxt.options.rootDir)

    // @ts-expect-error llms is not defined in the schema
    nuxt.options.llms = defu(nuxt.options.llms, {
      domain: url,
      title: meta.name || '',
      description: meta.description || '',
    })

    nuxt.options.site = defu(nuxt.options.site, {
      url,
      name: meta.name || '',
      debug: false,
    })
  },
})
