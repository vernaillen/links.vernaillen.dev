<script setup lang="ts">
useHead({
  meta: [
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

if (import.meta.client) {
  const hostname = window.location.hostname
  if (
    hostname !== 'links.vernaillen.dev'
    && hostname !== 'localhost'
    && hostname !== '127.0.0.1'
    && !hostname.startsWith('10.0.2.')
    && !hostname.includes('vercel.app')
  ) { window.location.href = 'https://links.vernaillen.dev' }
}
</script>

<template>
  <UPage>
    <AppHeader />
    <UContainer>
      <NuxtPage />
    </UContainer>
    <AppFooter />
  </UPage>
</template>
