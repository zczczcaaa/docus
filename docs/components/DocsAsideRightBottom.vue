<template>
  <div class="hidden lg:block space-y-6">
    <USeparator type="dashed" />

    <UPageLinks
      title="Community"
      :links="links"
    />
  </div>
</template>

<script setup lang="ts">
const links = [{
  icon: 'i-lucide-book-open',
  label: 'Nuxt UI Pro docs',
  to: 'https://ui.nuxt.com/getting-started/installation/pro/nuxt',
  target: '_blank',
},
{
  icon: 'i-lucide-credit-card',
  label: 'Purchase a license',
  to: 'https://ui.nuxt.com/pro/purchase',
  target: '_blank',
},
]
</script>
