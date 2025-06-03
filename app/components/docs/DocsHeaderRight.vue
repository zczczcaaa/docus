<template>
  <UButtonGroup>
    <UButton
      :label="`${copyStatus === 'copied' ? 'Copied' : 'Copy Page'}`"
      :icon="`i-lucide-${copyStatus === 'copied' ? 'check' : 'copy'}`"
      color="neutral"
      variant="outline"
      :loading="copyStatus === 'copying'"
      @click="copyPage"
    />
    <UDropdownMenu
      :items="items"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }"
      :ui="{
        content: 'w-48',
      }"
    >
      <UButton
        icon="i-lucide-chevron-down"
        color="neutral"
        variant="outline"
      />
    </UDropdownMenu>
  </UButtonGroup>
</template>

<script setup lang="ts">
const route = useRoute()
const copyStatus = ref<'idle' | 'copying' | 'copied'>('idle')

const items = [
  {
    label: 'Copy Markdown Link',
    icon: 'i-lucide-link',
    onSelect() {
      navigator.clipboard.writeText(`${window.location.origin}/raw${route.path}.md`)
    },
  },
  {
    label: 'View as Markdown',
    icon: 'i-simple-icons:markdown',
    target: '_blank',
    onSelect() {
      window.open(`${window.location.origin}/raw${route.path}.md`, '_blank')
    },
  },
  {
    label: 'Open in ChatGPT',
    icon: 'i-simple-icons:openai',
    target: '_blank',
    onSelect() {
      window.open(`https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Read ${window.location.origin}/raw${route.path}.md so I can ask questions about it.`)}`, '_blank')
    },
  },
  {
    label: 'Open in Claude',
    icon: 'i-simple-icons:anthropic',
    target: '_blank',
    onSelect() {
      window.open(`https://claude.ai/new?q=${encodeURIComponent(`Read ${window.location.origin}/raw${route.path}.md so I can ask questions about it.`)}`, '_blank')
    },
  },
]

const copyPage = async () => {
  copyStatus.value = 'copying'
  const markdown = await $fetch<string>(`${window.location.origin}/raw${route.path}.md`)
  await navigator.clipboard.writeText(markdown)
  copyStatus.value = 'copied'
  setTimeout(() => {
    copyStatus.value = 'idle'
  }, 2000)
}
</script>
