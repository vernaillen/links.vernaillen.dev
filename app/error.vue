<script setup lang="ts">
import type { NuxtError } from '#app'

const route = useRoute()

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.',
  ogImage: 'https://links.vernaillen.dev/social-card.png',
  twitterImage: 'https://links.vernaillen.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UPage>
    <AppHeader />
    <UContainer>
      <UAlert
        title="Ooops, something went wrong"
        :description="error.message"
        variant="soft"
        class="my-20"
      />
      <UButton
        v-if="route.path !== '/'"
        class="mb-20"
        to="/"
      >
        <UIcon name="i-heroicons-arrow-left" />
        Back to home
      </UButton>
    </UContainer>
    <AppFooter />
  </UPage>
</template>
