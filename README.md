[![docus](https://docus.dev/__og-image__/static/og.png)](https://docus.dev)

> Create beautiful docs with Markdown & Vue components

[![npm version](https://img.shields.io/npm/v/docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npmjs.com/package/docus)
[![npm downloads](https://img.shields.io/npm/dm/docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npm.chart.dev/docus)
[![License](https://img.shields.io/npm/l/docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npmjs.com/package/docus)

## 🚀 Quick Start

Create a new documentation project in seconds:

```bash
# Create a new project
npx create-docus my-docs

# Or create with i18n template for multi-language docs
npx create-docus my-docs -t i18n

# Navigate to your project
cd my-docs

# Start development server
npm run dev
```

That's it! Your documentation site will be running at `http://localhost:3000`

## 🎯 What it creates

The CLI scaffolds a complete documentation project with:

- ✨ **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design  
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 🌍 **Internationalization** - Native i18n support for multi-language docs
- 🔍 **Search** - Full-text search functionality
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and brand customization
- ⚡ **Fast** - Optimized for performance with Nuxt 4
- 🔧 **TypeScript** - Full TypeScript support

Learn more on the [Docus documentation](https://docus.dev).

## 📁 Project Structure

### Generated project

```
my-docs/
├── content/              # Your markdown content
│   ├── index.md         # Homepage
│   └── docs/            # Documentation pages
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

### Optional files and folders

Docus uses a layer system, you can go further and use any feature or file of a classical Nuxt project:

```
my-docs/
├── app.config.ts        # App configuration
├── nuxt.config.ts       # Nuxt configuration (add extra modules, components, etc.)
├── app/                 # App directory
│   ├── components/      # Components (add your own components)
│   ├── layouts/         # Layouts (add your own layouts)
│   └── pages/           # Pages (add your own pages)
└── server/              # Server-side code (add your own server-side code)
```

### `/content` folder structure

**Single language structure:**
```
content/
├── index.md
├── getting-started.md
└── guide/
    ├── introduction.md
    └── configuration.md
```

**Multi-language structure (with i18n):**
```
content/
├── en/
│   ├── index.md
│   └── guide/
│       └── introduction.md
└── fr/
    ├── index.md
    └── guide/
        └── introduction.md
```

## ⚡ Built with

Your project comes pre-configured with the best of the Nuxt ecosystem:

- [Nuxt 4](https://nuxt.com) - The web framework
- [Nuxt Content](https://content.nuxt.com/) - File-based CMS
- [Nuxt UI](https://ui.nuxt.com) - UI components
- [Nuxt Image](https://image.nuxt.com/) - Optimized images
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Docus Layer](https://www.npmjs.com/package/docus) - Documentation theme
- [Nuxt i18n](https://i18n.nuxtjs.org/) - Internationalization

## 📖 Documentation

For detailed documentation on customizing your Docus project, visit the [Docus Documentation](https://docus.dev)

## 🛠️ Development

This repository contains the CLI tool source code.

### Local Development

To contribute to the CLI tool:

```bash
# Clone this repository
git clone https://github.com/nuxt-content/docus

# Install dependencies
pnpm install

# Run the dev server to run the docus docs
pnpm run dev
```

### Package Structure

This is a monorepo containing:

- [**`/cli`**](https://github.com/nuxt-content/docus/tree/main/cli) - CLI tool (`create-docus`)
- [**`/layer`**](https://github.com/nuxt-content/docus/tree/main/layer) - Docus Nuxt layer (`docus`)
- [**`/docs`**](https://github.com/nuxt-content/docus/tree/main/docs) - Official documentation
- [**`/.starters`**](https://github.com/nuxt-content/docus/tree/main/.starters) - Starters project

## 📄 License

Published under the [MIT](LICENSE) license.

---

Docus has been entirely rewritten from scratch and is inspired from [undocs](https://github.com/unjs/undocs) made by [@pi0](https://github.com/pi0) 💚
