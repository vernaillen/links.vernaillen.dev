import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxtjs/plausible',
    'nuxt-time'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark'
  },

  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-02-01',

  typescript: {
    strict: true
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    },
    checker: {
      lintOnStart: true,
      fix: true
    }
  },

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/links'
    }
  },

  plausible: {
    apiHost: 'https://links.vernaillen.dev/plio'
  }
})
