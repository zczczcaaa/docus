---
seo:
  title: Docus by Nuxt UI Pro - Docs theme
  description: A Nuxt UI Pro powered documentation theme and CLI to help you
    create beautiful, performant, and customizable docs. Comes with a ready
    visual out of the box, just focus on writing content using the Markdown
    syntax.
---

::u-page-hero
---
orientation: horizontal
---
  :::prose-pre{filename="Terminal"}
  ```bash
  npx docus my-super-docs
  ```
  :::

#headline 
Powered by Nuxt UI Pro

#title
The modern way to write docs

#description
Built on Nuxt’s best tools, Docus helps to ship fast, flexible, and SEO-optimized documentation with beautiful design out of the box.

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
target: _blank
to: https://nuxt.com
spotlight: true
class: group
reverse: true
---
#title
Built with [Nuxt 3]{.text-primary}

#description
Optimized by the most famous Vue framework. Docus provides everything you need to build website with optimal performances and SEO.

#default
::div{class="flex items-center justify-center"}
:img{src="/landing/nuxt-logo-3D.svg" class="h-42"}
::
:::

:::u-page-card
---
target: _blank
to: https://ui.nuxt.com
spotlight: true
class: col-span-2
---
#title
Powered by [Nuxt UI Pro]{.text-primary}

#description
Beautiful out of the box, minimal by design but highly customizable. Docus leverages Nuxt UI Pro to give you the best docs writing experience with zero boilerplate, just focus on your content. 

#default
::div{class="grid grid-cols-2"}

:::u-color-mode-image
---
dark: /landing/dark/container-ui-pro.png
light: /landing/light/container-ui-pro.png
alt: Beautiful visual powered by UI Pro
class: w-full h-80 object-cover rounded-lg
---
:::

:::u-card
---
target: _blank
to: https://ui.nuxt.com/components/content-search
---
#header
Built-in navigation and search

#default
Only focus on ordering your content, we take care of the search modal for you thanks to `fuse.js`. We're also generating the side navigation for you. 
:::

::
:::

:::u-page-card
---
target: _blank
spotlight: true
class: col-span-2
---
#title
Enhanced Markdown syntax by [Nuxt Content]{.text-primary}
#description
The only thing you need to take care about is writing your content. Write your pages in Markdown and integrate any UI Pro components with the MDC syntax.

#default
::tabs
  :::tabs-item{.my-5 icon="i-lucide-eye" label="Preview"}
    ::::div{.flex.flex-col.gap-4.w-full}
      :::::note{.w-full.my-0}
      Here's some additional information for you.
      :::::
    
      :::::tip{.w-full.my-0}
      Here's a helpful suggestion.
      :::::
    
      :::::warning{.w-full.my-0}
      Be careful with this action as it might have unexpected results.
      :::::
    
      :::::caution{.w-full.my-0}
      This action cannot be undone.
      :::::
    ::::
  :::

  :::tabs-item{icon="i-lucide-code" label="Code"}
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
  :::
::
:::

:::u-page-card
---
target: _blank
spotlight: true
---
#title
Customize with [Nuxt App Config]{.text-primary}

#description
Modify the appearance of any components globally through `app.config.ts`, no direct code modifications required.
:::

:::u-page-card
---
target: _blank
spotlight: true
---
#title
[Nuxt Color]{.text-primary} mode configured

#description
Built-in dark mode provided, no configuration required.
:::

:::u-page-card
---
target: _blank
to: https://content.nuxt.com/studio
spotlight: true
class: col-span-2
---
#title
Collaborate on [Nuxt Studio]{.text-primary}

#description
Write and manage your content visually, with zero Markdown knowledge required. Let your non technical colleagues collaborate on the documentation. 

#default
:video{autoplay controls loop src="https://res.cloudinary.com/nuxt/video/upload/v1747063307/docus/docus_mzwktl.mp4" class="rounded-lg"}
:::

::
