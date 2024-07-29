export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/ui'],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  app: {
    baseURL: '/'
  },

  compatibilityDate: '2024-07-26'
})