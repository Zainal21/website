import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: 'src/content/blog/**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    image: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
})

export const collections = { blog }
