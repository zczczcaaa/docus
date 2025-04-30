<script setup lang="ts">
const { github, socials } = useAppConfig()

const links = computed(() => [
  github.url && {
    'icon': 'i-simple-icons-github',
    'to': github.url,
    'target': '_blank',
    'aria-label': 'GitHub social link',
  },
  ...Object.entries(socials || {}).map(([key, url]) => ({
    'icon': `i-simple-icons-${key}`,
    'to': url,
    'target': '_blank',
    'aria-label': `${key} social link`,
  })),
].filter(Boolean))
</script>

<template>
  <UFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UColorModeButton />

      <template v-if="links.length">
        <UButton
          v-for="(link, index) of links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
