import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      source: "experience/*.md",
      type: "page",
      schema: z.object({
        company: z.string(),
        jobTitle: z.string(),
        duration: z.string().optional(),
        description: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      source: "projects/*.md",
      type: "page",
      schema: z.object({
        project: z.string(),
        year: z.string().optional(),
        description: z.string().optional(),
        tools: z.string().optional(),
      }),
    }),
  },
});
