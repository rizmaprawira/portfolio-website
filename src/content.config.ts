import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    context: z.string(),
    period: z.string(),
    keywords: z.array(z.string()),
    order: z.number(),
    locale: z.enum(["en", "id"]).default("en"),
    translationKey: z.string(),
  }),
});
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    locale: z.enum(["en", "id"]).default("en"),
    translationKey: z.string().optional(),
    category: z.enum([
      "Science & Research",
      "Technology & AI",
      "Education & Learning",
      "Life & Reflections",
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCaption: z.string().optional(),
  }),
});
const lessons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subject: z.string(),
    topic: z.string(),
    locale: z.enum(["en", "id"]).default("en"),
    translationKey: z.string().optional(),
    draft: z.boolean().default(true),
    materials: z
      .array(
        z.object({
          title: z.string(),
          url: z.string(),
          type: z.enum(["PDF", "Exercises", "Answer key", "Code", "Video"]),
        }),
      )
      .default([]),
  }),
});
export const collections = { research, blog, lessons };
