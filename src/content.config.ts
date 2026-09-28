import { defineCollection, z } from "astro:content";

const plans = defineCollection({
  type: "content",
  schema: z.object({
    project: z.string(),
    title: z.string(),
    version: z.string(),
    updatedAt: z.string(),
    status: z.string().optional()
  })
});

export const collections = { plans };
