<template>
  <div class="flex items-center justify-center">
    <NuxtImg
      src="/landing/nuxt-logo-3D.svg"
      class="h-42 floating-logo"
    />
  </div>
</template>

<style>
.floating-logo {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.group:hover .floating-logo {
  transform: translateY(-20px);
}
</style>
