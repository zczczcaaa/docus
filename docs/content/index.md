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
Docus

#title
The best of [Nuxt]{.text-secondary} for your docs

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
#features
  :::u-page-card
  ---
  spotlight: true
  class: group col-span-2 lg:col-span-1
  target: _blank
  to: https://ui.nuxt.com
  ---
    ::::floating-nuxt
    ::::
  
  #title
  Built with [Nuxt 3]{.text-secondary}
  
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
  Powered by [Nuxt UI Pro]{.text-secondary}
  
  #description
  Beautiful out of the box, minimal by design but highly customizable. Docus leverages Nuxt UI Pro to give you the best docs writing experience with zero boilerplate, just focus on your content.
  :::

  :::u-page-card
  ---
  spotlight: true
  class: col-span-2
  target: _blank
  ---
    ::::tabs
      :::::tabs-item{.mt-5 icon="i-lucide-eye" label="Preview"}
        ::::::div{.flex.flex-col.gap-4}
          :::::::note{.my-0}
          Here's some additional information for you.
          :::::::
        
          :::::::tip{.my-0}
          Here's a helpful suggestion.
          :::::::
        
          :::::::warning{.my-0}
          Be careful with this action as it might have unexpected results.
          :::::::
        
          :::::::caution{.my-0}
          This action cannot be undone.
          :::::::
        ::::::
      :::::
    
      :::::tabs-item{.mt-5.mb-2.text-xs.overflow-x-auto icon="i-lucide-code" label="Code"}
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
  Enhanced Markdown syntax by [Nuxt Content]{.text-secondary}
  
  #description
  The only thing you need to take care about is writing your content. Write your pages in Markdown and extend with MDC syntax to embed Nuxt UI or custom Vue components. Structure, routing, and rendering are handled for you.
  :::

  :::u-page-card
  ---
  spotlight: true
  target: _blank
  class: col-span-2 md:col-span-1
  ---
    ::::div{.bg-elevated.rounded-lg.p-3.overflow-x-auto}
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
  Customize with [Nuxt App Config]{.text-secondary}
  
  #description
  Update colors, social links, header logos and component styles globally using the `app.config.ts`, no direct code modifications required.
  :::

  :::u-page-card
  ---
  spotlight: true
  target: _blank
  class: col-span-2 md:col-span-1 min-h-[450px]
  ---
    ::::color-mode-switch
    ::::
  
  #title
  [Nuxt Color]{.text-secondary} mode
  
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
  Built-in navigation and [full-text search]{.text-secondary}
  
  #description
  Only focus on ordering your content, Docus handles the search modal and auto-generates the side navigation for you.
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
  Collaborate on [Nuxt Studio]{.text-secondary}
  
  #description
  Write and manage your content visually, with zero Markdown knowledge required. Let your non technical colleagues collaborate on the documentation and integrate Vue components without code skills.
  :::

  :::u-page-card
  ---
  spotlight: true
  target: _blank
  to: https://image.nuxt.com/
  class: col-span-2 lg:col-span-1
  ---
    ::::div{class="flex-1 flex items-center justify-center"}
      :::::u-color-mode-image
      ---
      alt: Nuxt Image visual
      dark: /landing/dark/nuxt-image.svg
      light: /landing/light/nuxt-image.svg
      class: w-[30%] lg:w-[70%] my-12 lg:my-0
      ---
      :::::
    ::::
  
  #title
  [Nuxt Image]{.text-secondary} optimization
  
  #description
  Docus automatically converts Markdown images to use `<NuxtImg>` .
  :::
::
