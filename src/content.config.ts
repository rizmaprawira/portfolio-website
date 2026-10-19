import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(), context: z.string(), period: z.string(), keywords: z.array(z.string()),
    order: z.number(), locale: z.enum(['en', 'id']).default('en'), translationKey: z.string(),
  }),
});
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(), description: z.string(), date: z.coerce.date(),
    locale: z.enum(['en', 'id']).default('en'), translationKey: z.string().optional(),
    category: z.enum(['Science & Research', 'Technology & AI', 'Education & Learning', 'Life & Reflections']),
    tags: z.array(z.string()).default([]), draft: z.boolean().default(true),
  }),
});
export const collections = { research, blog };
