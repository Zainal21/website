import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: 'src/content/blog/**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    category: z.string().default('General'),
    image: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
})

export const collections = { blog }
