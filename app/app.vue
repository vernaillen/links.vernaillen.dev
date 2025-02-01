<script setup lang="ts">
useHead({
  title: 'wouter on the net: the links',
  meta: [
    { name: 'description', content: 'Wouter Vernaillen: Ecstatic Dance DJ, Trance Dance facilitator, Freelance Java/JS Developer, Forever learning...' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      charset: 'utf-8'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogImage: 'https://links.vernaillen.dev/social-card.png',
  twitterImage: 'https://links.vernaillen.dev/social-card.png',
  twitterCard: 'summary_large_image'
})

if (import.meta.client) {
  const hostname = window.location.hostname
  if (
    hostname !== 'links.vernaillen.dev'
    && hostname !== 'localhost'
    && hostname !== '127.0.0.1'
    && !hostname.startsWith('10.0.2.')
    && !hostname.includes('netlify.app')
  ) { window.location.href = 'https://links.vernaillen.dev' }
}
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
