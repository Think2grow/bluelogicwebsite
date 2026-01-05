import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// 4. Define your collection(s)
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    slug: z.string().regex(/^[a-zA-Z0-9\-\_]+$/, {
      message:
        "Slug can only contain letters, numbers, hyphens, and underscores",
    }),
    title: z.string(),
    description: z.string().optional(),
    author: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog };
