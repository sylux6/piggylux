import { defineCollection, z } from "astro:content";

const artworks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    year: z.number().optional(),
    media: z.string().optional(),
    dimensions: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(), // ← strings again
    images: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});

export const collections = { artworks };
