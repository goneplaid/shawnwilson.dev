import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      source: "experience/*.md",
      type: "page",
      schema: z.object({
        company: z.string(),
        jobTitle: z.string(),
        duration: z.string(),
        description: z.string(),
      }),
    }),
    projects: defineCollection({
      source: "projects/*.md",
      type: "page",
      schema: z.object({
        project: z.string(),
        year: z.string(),
        description: z.string(),
        tools: z.string(),
      }),
    }),
  },
});
