import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxthq/studio',
    '@nuxtjs/plausible',
    'nuxt-time'
  ],

  devtools: {
    enabled: true
  },

  colorMode: {
    preference: 'dark'
  },

  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi', 'logos', 'game-icons', 'arcticons', 'uil']
  },

  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-18',

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
