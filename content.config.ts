import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '*.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        logos: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          url: z.string()
        })),
        links: z.array(z.object({
          label: z.string(),
          content: z.string(),
          url: z.string(),
          urlDisplay: z.string()
        }))
      })
    })
  }
})
