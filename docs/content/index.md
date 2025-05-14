---
seo:
  title: Docus by Nuxt UI Pro - Documentation builder
  description: A Nuxt UI Pro powered documentation theme and CLI to help you
    create beautiful, performant, and customizable docs. Comes with a ready
    visual out of the box, just focus on writing content using the Markdown
    syntax.
---

::u-page-hero
#headline
Powered by Nuxt UI Pro

#title
The modern way to write docs

#description
Built on Nuxt's best tools, Docus helps to ship fast, flexible, and SEO-optimized documentation with beautiful design out of the box.

#links
  :::u-button
  ---
  size: xl
  to: /getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::
::

::u-page-section
#title
The best of the [Nuxt]{.text-primary} ecosystem

#description
Docus brings together the best of the Nuxt ecosystem to help you build beautiful documentation with ease.

#features
  :::u-page-card
  ---
  spotlight: true
  class: group
  target: _blank
  to: https://ui.nuxt.com
  ---
    ::::floating-nuxt
    ::::
  
  #title
  Built with [Nuxt 3]{.text-primary}
  
  #description
  Optimized by the most famous Vue framework. Docus gives you everything you need to build fast, performant, and SEO-friendly websites.
  :::

  :::u-page-card
  ---
  spotlight: true
  class: col-span-2
  target: _blank
  to: https://ui.nuxt.com
  ---
    ::::u-color-mode-image
    ---
    alt: Beautiful visual powered by UI Pro
    class: w-full h-80 object-cover rounded-lg
    dark: /landing/dark/templates-ui-pro.png
    light: /landing/dark/templates-ui-pro.png
    ---
    ::::
  
  #title
  Powered by [Nuxt UI Pro]{.text-primary}
  
  #description
  Beautiful out of the box, minimal by design but highly customizable. Docus leverages Nuxt UI Pro to give you the best docs writing experience with zero boilerplate, just focus on your content.
  :::

  :::u-page-card
  ---
  spotlight: true
  class: col-span-2
  target: _blank
  ---
    ::::tabs{.!my-0}
      :::::tabs-item{.mt-5 icon="i-lucide-eye" label="Preview"}
        ::::::div{.flex.flex-col.gap-4.w-full}
          :::::::note{.w-full.my-0}
          Here's some additional information for you.
          :::::::
        
          :::::::tip{.w-full.my-0}
          Here's a helpful suggestion.
          :::::::
        
          :::::::warning{.w-full.my-0}
          Be careful with this action as it might have unexpected results.
          :::::::
        
          :::::::caution{.w-full.my-0}
          This action cannot be undone.
          :::::::
        ::::::
      :::::
    
      :::::tabs-item{.mt-5.mb-2.text-xs icon="i-lucide-code" label="Code"}
      ```mdc
      ::note
      Here's some additional information.
      ::
      
      ::tip
      Here's a helpful suggestion.
      ::
      
      ::warning
      Be careful with this action as it might have unexpected results.
      ::
      
      ::caution
      This action cannot be undone.
      ::
      ```
      :::::
    ::::
  
  #title
  Enhanced Markdown syntax by [Nuxt Content]{.text-primary}
  
  #description
  The only thing you need to take care about is writing your content. Write your pages in Markdown and extend with MDC syntax to embed Nuxt UI or custom Vue components. Structure, routing, and rendering are handled for you.
  :::

  :::u-page-card
  ---
  spotlight: true
  target: _blank
  ---
    ::::div{.truncate.bg-elevated.rounded-lg.p-3}
    ```ts [app.config.ts]
    export default defineAppConfig({
      ui: {
        colors: {
          primary: 'green',
          secondary: 'sky',
        },
      },
      socials: {
        x: 'https://x.com/nuxt_js',
        nuxt: 'https://nuxt.com'
      }
    })
    ```
    ::::
  
  #title
  Customize with [Nuxt App Config]{.text-primary}
  
  #description
  Update colors, social links, header logos and component styles globally using the `app.config.ts`, no direct code modifications required.
  :::

  :::u-page-card
  ---
  spotlight: true
  target: _blank
  ---
    ::::color-mode-switch
    ::::
  
  #title
  [Nuxt Color]{.text-primary} mode
  
  #description
  Built-in dark mode provided, no configuration required.
  :::

  :::u-page-card
  ---
  spotlight: true
  class: col-span-2
  target: _blank
  ---
    ::::command-search
    ::::
  
  #title
  Built-in navigation and [full-text search]{.text-primary}
  
  #description
  Only focus on ordering your content, we take care of the search modal. We're also generating the side navigation for you.
  :::

  :::u-page-card
  ---
  spotlight: true
  class: col-span-2
  target: _blank
  ---
    ::::browser-frame
    :video{.rounded-md controls loop src="https://res.cloudinary.com/nuxt/video/upload/v1747230893/studio/wzt9zfmdvk7hgmdx3cnt.mp4"}
    ::::
  
  #title
  Collaborate on [Nuxt Studio]{.text-primary}
  
  #description
  Write and manage your content visually, with zero Markdown knowledge required. Let your non technical colleagues collaborate on the documentation.
  :::

  :::u-page-card
  ---
  spotlight: true
  target: _blank
  to: https://image.nuxt.com/
  ---
    ::::div{class="flex-1 flex items-center justify-center"}
      :::::u-color-mode-image
      ---
      alt: Nuxt Image visual
      dark: /landing/dark/nuxt-image.svg
      light: /landing/dark/nuxt-image.svg
      ---
      :::::
    ::::
  
  #title
  [Nuxt Image]{.text-primary} optimization
  
  #description
  Docus automatically converts Markdown images to use `<NuxtImg>` .
  :::
::
