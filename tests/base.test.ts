import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils/e2e";

describe("Basic Site Functionality", async () => {
  await setup({
    // run nuxt in test mode
  });

  it("renders the index", async () => {
    const html = await $fetch("/");

    expect(html).toContain("ShawnWilson.dev");
    expect(html).toContain("Portfolio site coming soon");
  });
});
