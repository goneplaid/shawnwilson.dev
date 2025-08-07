import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils/e2e";

describe("SiteNav Component", async () => {
  await setup({
    // run nuxt in test mode
  });

  it("should render navigation with proper ARIA attributes", async () => {
    const html = await $fetch("/home");
    
    // Check for semantic navigation structure
    expect(html).toContain('role="navigation"');
    expect(html).toContain('aria-label="Main navigation"');
    expect(html).toContain('role="list"');
  });

  it("should display all navigation links with proper labels", async () => {
    const html = await $fetch("/home");
    
    // Check for all three navigation items
    expect(html).toContain("Home");
    expect(html).toContain("Work");
    expect(html).toContain("Writing");
  });

  it("should render navigation links as list items", async () => {
    const html = await $fetch("/home");
    
    // Verify proper list structure - should have at least 3 list items
    const listItemMatches = html.match(/<li[^>]*>/g);
    expect(listItemMatches).toBeTruthy();
    expect(listItemMatches!.length).toBeGreaterThanOrEqual(3);
  });

  it("should include NuxtLink components for navigation", async () => {
    const html = await $fetch("/home");
    
    // Check that navigation items are rendered as links
    // Note: Not testing specific URLs as requested, just verifying they're links
    expect(html).toMatch(/<a[^>]*>\s*Home\s*<\/a>/);
    expect(html).toMatch(/<a[^>]*>\s*Work\s*<\/a>/);
    expect(html).toMatch(/<a[^>]*>\s*Writing\s*<\/a>/);
  });

  it("should have accessible link structure", async () => {
    const html = await $fetch("/home");
    
    // Verify links have proper structure for accessibility
    // The component uses aria-current for active state (though we're not testing specific routing)
    expect(html).toContain('aria-current');
  });
});