import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nuxt Maplibre",
  description: "Documentation for the Nuxt Maplibre module",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: process.env.NODE_ENV === 'production' ? '/nuxt-maplibre/' : '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/getting-started/installation' },
      { text: 'Components', link: '/components/introduction' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Usage', link: '/getting-started/usage' }
        ]
      },
      {
        text: 'Components',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/components/introduction' },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Q&A', link: '/about/q&a' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gugustinette/nuxt-maplibre' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/nuxt-maplibre' }
    ],

    search: {
      provider: 'local',
    }
  },
  ignoreDeadLinks: true
})
