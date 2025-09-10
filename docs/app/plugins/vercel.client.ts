// // import { onNuxtReady, defineNuxtPlugin, useNuxtApp } from '#imports'
// import { inject, pageview } from '@vercel/analytics'

// export default defineNuxtPlugin(() => {
//   const nuxtApp = useNuxtApp()

//   onNuxtReady(() => {
//     inject({
//       // basePath: ,
//       disableAutoTrack: true,
//       framework: 'nuxt',
//     })
//     nuxtApp.hooks.hook('page:finish', () => {
//       // pageview(nuxtApp.payload.url)
//     })
//   })
// })