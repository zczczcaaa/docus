<template>
  <ClientOnly>
    <div class="flex-1 flex items-center justify-center">
      <USwitch
        v-model="isLight"
        unchecked-icon="i-lucide-moon"
        checked-icon="i-lucide-sun"
        size="xl"
        color="neutral"
        :ui="{
          base: 'w-81 h-40 rounded-lg rotate-90 data-[state=checked]:bg-[var(--ui-color-neutral-200)]',
          thumb: 'data-[state=checked]:translate-x-41 data-[state=checked]:rtl:-translate-x-41 rounded-lg size-39',
          wrapper: 'text-base',
          icon: 'rotate-270 size-10',
        }"
        @click="isDark = !isDark"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const isLight = computed({
  get() {
    return colorMode.value === 'light'
  },
  set(_isLight) {
    colorMode.preference = _isLight ? 'light' : 'dark'
  },
})
</script>
