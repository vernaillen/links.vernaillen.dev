<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('pages').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
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
      wouter <span class="text-primary-500 font-semibold">on the</span> net
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
        ecstatic dance dj & trancedance facilitator<br>
        freelance full stack developer (java & nuxt)<br>
        ... forever exploring & learning ...
      </div>
    </template>
    <LinksAccordion :links="page.links" />
  </UPageSection>
</template>
