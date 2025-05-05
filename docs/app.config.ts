export default defineAppConfig({
  title: 'Docus by Nuxt UI Pro',
  header: {
    logo: {
      alt: 'Nuxt logo',
      light: '/nuxt-ui-pro-light.svg',
      dark: '/nuxt-ui-pro-dark.svg',
    },
  },
  socials: {
    x: 'https://x.com/nuxt_js',
    discord: 'https://discord.com/invite/ps2h6QT',
    nuxt: 'https://nuxt.com',
  },
  toc: {
    links: [{
      icon: 'i-lucide-star',
      label: 'Star on GitHub',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
    }, {
      icon: 'i-lucide-book-open',
      label: 'Nuxt UI Pro docs',
      to: 'https://ui.nuxt.com/getting-started/installation/pro/nuxt',
      target: '_blank',
    }, {
      icon: 'i-simple-icons-nuxtdotjs',
      label: 'Purchase a license',
      to: 'https://ui.nuxt.com/pro/purchase',
      target: '_blank',
    }],
  },
})
