export default defineAppConfig({
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
    contentNavigation: {
      slots: {
        linkLeadingIcon: 'size-4 mr-1',
        listWithChildren: 'border-(--ui-bg-elevated)',
        linkTrailing: 'hidden',
      },
      variants: {
        active: {
          false: {
            link: 'text-toned hover:after:bg-accented',
          },
        },
      },
    },
    pageLinks: {
      slots: {
        linkLeadingIcon: 'size-4',
        linkLabelExternalIcon: 'size-2.5',
      },
    },
  },
  toc: {
    title: 'On this page',
  },
})
