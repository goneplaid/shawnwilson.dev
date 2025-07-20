import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      // Load every file inside the `content` directory
      source: "experience/*.md",
      // Specify the type of content in this collection
      type: "page",
      schema: z.object({
        title: z.string(),
        aside: z.string().optional(),
        description: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      // Load every file inside the `content` directory
      source: "projects/*.md",
      // Specify the type of content in this collection
      type: "page",
      schema: z.object({
        title: z.string(),
        aside: z.string().optional(),
        footer: z.string().optional(),
      }),
    }),
  },
});
