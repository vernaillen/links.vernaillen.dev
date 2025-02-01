<script setup lang="ts">
defineProps<{
  links: AccordionItem[]
}>()
</script>

<template>
  <UAccordion :items="links">
    <template #leading="{ item, open, index }">
      <UIcon
        v-if="item.icon"
        :name="item.icon"
        class="mr-1"
        :class="item.iconClass"
      />
      <NuxtImg
        v-if="item.image"
        :src="item.image"
        :alt="item.imageAlt ? item.imageAlt : item.label"
        :width="21"
        :height="20"
        format="webp"
        class="mr-1"
        :class="item.imageClass"
      />
    </template>
    <template #content="{ item, index }">
      <div
        class="overflow-hidden z-40
          shadow-sm rounded-md
          bg-white bg-opacity-70 dark:bg-gray-800
          prose dark:prose-invert
          text-center slide-enter "
        :style="'--enter-stage: ' + index"
      >
        <div class="overflow-hidden px-2 pt-5 pb-3 text-sm text-dark dark:text-gray-200">
          <component
            :is="item.svgComponent"
            v-if="item.svgComponent"
          />
          <div v-html="item.subTitle" />
          <div v-html="item.content" />
          <UButton
            :to="item.url"
            :label="item.urlDisplay ? item.urlDisplay : item.url"
            class="mt-2"
            variant="subtle"
            trailing-icon="i-uil-external-link-alt"
            target="_blank"
          >
            <template #trailing>
              <UIcon
                name="i-uil-external-link-alt"
                size="1em"
              />
            </template>
          </UButton>
        </div>
      </div>
    </template>
  </UAccordion>
</template>
