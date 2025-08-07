import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils/e2e";

describe("SiteHeader Component", async () => {
  await setup({
    // run nuxt in test mode
  });

  it("should display the author name", async () => {
    const html = await $fetch("/home");
    
    expect(html).toContain("Shawn Wilson");
  });

  it("should display the author avatar with proper alt text", async () => {
    const html = await $fetch("/home");
    
    // Check for avatar image
    expect(html).toContain('src="/images/portrait.png"');
    expect(html).toContain('alt="Casual headshot of Shawn Wilson"');
    
    // Check for fallback text
    expect(html).toContain("SW");
  });

  it("should display the job title", async () => {
    const html = await $fetch("/home");
    
    expect(html).toContain("Full Stack Product Engineer");
  });

  it("should display the professional tagline", async () => {
    const html = await $fetch("/home");
    
    expect(html).toContain("Problem → Design → Code → Ship 🚀");
  });

  it("should render with proper semantic header structure", async () => {
    const html = await $fetch("/home");
    
    // Check for semantic header element with banner role
    expect(html).toContain('role="banner"');
  });

  it("should include the site navigation component", async () => {
    const html = await $fetch("/home");
    
    // SiteNav component should be present (we'll test its content in its own test file)
    expect(html).toContain('role="navigation"');
    expect(html).toContain('aria-label="Main navigation"');
  });
});