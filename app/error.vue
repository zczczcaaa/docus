<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.',
})


const props = defineProps<{
  error: NuxtError
}>()

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

// const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
// const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
//   default: () => [],
//   server: false,
// })

// provide('navigation', navigation)
</script>

<template>
  <div>
    <AppHeader />

    <UMain>
      <UContainer>
        <UPage>
          <!-- <UPageError :error="error" /> -->
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <!-- <LazyUContentSearch :files="files" :navigation="navigation" /> -->
    </ClientOnly>
  </div>
</template>
