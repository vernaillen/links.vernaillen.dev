<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('pages').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
  ogImage: 'https://links.vernaillen.dev/social-card.png',
  twitterImage: 'https://links.vernaillen.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
definePageMeta({
  colorMode: 'dark'
})
</script>

<template>
  <UPageSection
    v-if="page"
    :description="page.description"
    class="max-w-xl mx-auto"
  >
    <template #title>
      <div class="flex justify-center">
        <Motion
          as="div"
          :initial="{ x: -25 }"
          :animate="{ x: 0 }"
          :transition="{ duration: 1, ease: 'easeInOut' }"
        >
          wouter
        </Motion>
        <Motion
          as="div"
          :initial="{ scale: 1.4, y: -4 }"
          :animate="{ scale: 1, y: 0 }"
          :transition="{ duration: 1, ease: 'easeInOut' }"
          class="text-primary-500 font-semibold mx-1"
        >
          on the
        </Motion>
        <Motion
          as="div"
          :initial="{ x: 25 }"
          :animate="{ x: 0 }"
          :transition="{ duration: 1, ease: 'easeInOut' }"
        >
          net
        </Motion>
      </div>
    </template>
    <template #description>
      <UButton
        v-for="logo, index in page.logos"
        :key="index"
        :icon="logo.icon"
        :to="logo.url"
        :aria-label="logo.label"
        size="xs"
        variant="subtle"
        target="_blank"
        class="m-1"
      />
      <div class="text-sm mt-5">
        <Motion
          as="div"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.2, delay: 0.3 }"
        >
          ecstatic dance dj & trancedance facilitator
        </Motion>
        <Motion
          as="div"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.2, delay: 0.6 }"
        >
          freelance full stack developer (java & nuxt)
        </Motion>
        <Motion
          as="div"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.2, delay: 0.9 }"
          class="mt-2"
        >
          ... forever exploring & learning ...
        </Motion>
      </div>
    </template>
    <LinksAccordion :links="page.links" />
  </UPageSection>
</template>
