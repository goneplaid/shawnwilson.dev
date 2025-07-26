import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    pool: "threads",
    poolOptions: {
      threads: {
        maxThreads: 2, // Instead of default 4
        minThreads: 1,
      },
    },
  },
});
