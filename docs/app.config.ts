export default defineAppConfig({
  header: {
    title: 'Docus'
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc',
    },
  },
  uiPro: {
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0',
      },
    },
    pageSection: {
      slots: {
        features: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none',
      },
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
