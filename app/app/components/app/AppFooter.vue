<script setup lang="ts">
const appConfig = useAppConfig()

const links = computed(() => [
  ...Object.entries(appConfig.socials || {}).map(([key, url]) => ({
    'icon': `i-simple-icons-${key}`,
    'to': url,
    'target': '_blank',
    'aria-label': `${key} social link`,
  })),
  appConfig.github?.url && {
    'icon': 'i-simple-icons-github',
    'to': appConfig.github.url,
    'target': '_blank',
    'aria-label': 'GitHub repository',
  },
].filter(Boolean))
</script>

<template>
  <UFooter>
    <template #left>
      <div class="text-sm text-muted">
        Copyright © {{ new Date().getFullYear() }}
      </div>
    </template>

    <template #right>
      <template v-if="links.length">
        <UButton
          v-for="(link, index) of links"
          :key="index"
          size="sm"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
      <UColorModeButton />
    </template>
  </UFooter>
</template>
