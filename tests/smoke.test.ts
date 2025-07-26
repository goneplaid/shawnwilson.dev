import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils/e2e";

describe("Basic Site Functionality", async () => {
  await setup({
    // run nuxt in test mode
  });

  it("renders the homepage", async () => {
    const html = await $fetch("/");
    expect(html).toContain("Shawn Wilson");
  });

  it("renders the work page", async () => {
    const html = await $fetch("/work");
    expect(html).toContain("Work");
  });

  it("renders the writing page", async () => {
    const html = await $fetch("/writing");
    expect(html).toContain("Writing");
  });
});
