export default defineAppConfig({
  uiPro: {
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        headline: 'text-primary font-semibold',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex',
        wrapper: 'flex-none',
      },
    },
  },
  title: 'Docus by Nuxt UI Pro',
  header: {
    logo: {
      alt: 'Nuxt logo',
      light: '/docus-light.svg',
      dark: '/docus-dark.svg',
    },
  },
  socials: {
    x: 'https://x.com/nuxt_js',
    discord: 'https://discord.com/invite/ps2h6QT',
    nuxt: 'https://nuxt.com',
  },
  toc: {
    links: [{
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
