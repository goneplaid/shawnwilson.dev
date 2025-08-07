import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils/e2e";

describe("useAnalytics Integration", async () => {
  await setup({
    // run nuxt in test mode
  });

  it("should inject Google Analytics scripts into page head", async () => {
    // Fetch the homepage which uses DefaultLayout
    const html = await $fetch("/");

    // Check that Google Analytics external script is included
    expect(html).toContain("https://www.googletagmanager.com/gtag/js?id=G-N0P2XZLHDY");
    
    // Check that inline Analytics initialization script is included
    expect(html).toContain("window.dataLayer = window.dataLayer || [];");
    expect(html).toContain("function gtag(){dataLayer.push(arguments);}");
    expect(html).toContain("gtag('config', 'G-N0P2XZLHDY')");
  });

  it("should include error handling for failed script loading", async () => {
    const html = await $fetch("/");
    
    // Check that error handling is present
    expect(html).toContain("console.error('Failed to load Google Analytics script')");
  });

  it("should set scripts with high priority in head", async () => {
    const html = await $fetch("/");
    
    // Both the external script and inline script should be in the head
    // and positioned early due to high priority
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    expect(headMatch).toBeTruthy();
    
    const headContent = headMatch![1];
    expect(headContent).toContain("gtag/js?id=G-N0P2XZLHDY");
    expect(headContent).toContain("dataLayer");
  });
});