# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Nuxt 4 application. Use these commands for development:

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Generate static site
pnpm generate

# Run tests
pnpm test
```

## Project Architecture

This is a **Nuxt 4** portfolio website built with Vue 3, TypeScript, and Tailwind CSS. The site showcases work experience and projects using a content-driven architecture.

### Framework Stack

- **Nuxt 4**: Main framework with Vue 3 and TypeScript
- **shadcn-nuxt**: Component library integration with shadcn/ui components
- **TailwindCSS**: Utility-first CSS framework configured via PostCSS
- **Reka UI**: Headless UI components as foundation
- **Vitest**: Testing framework with Nuxt test utilities
- **Vue Router 4**: Client-side routing (handled by Nuxt)

### Project Structure

- `app/`: Main application directory (Nuxt 4 structure)
  - `app.vue`: Root application component
  - `assets/css/main.css`: Global CSS with Tailwind imports
  - `pages/index.vue`: Homepage component
  - `components/ui/`: shadcn/ui components (auto-generated)
  - `lib/utils.ts`: Utility functions for class merging
- `nuxt.config.ts`: Nuxt configuration with modules and CSS setup
- `components.json`: shadcn/ui configuration
- `tests/`: Test files using Vitest and @nuxt/test-utils
- `public/`: Static assets including images and favicon

### Key Configuration Notes

- **shadcn/ui Integration**: Configured with "new-york" style, TypeScript enabled, and Lucide icons
- **Component Aliases**: `@/components`, `@/lib/utils`, `@/components/ui` configured in components.json
- **TailwindCSS**: Configured through PostCSS in nuxt.config.ts, not as a Nuxt module
- **Testing**: Vitest configured with Nuxt environment and thread pool (max 2 threads)
- **TypeScript**: Auto-generated config extends `.nuxt/tsconfig.json`
- **ES Modules**: Project uses `"type": "module"` in package.json

### Development Workflow

- Nuxt handles TypeScript compilation and hot reload automatically
- shadcn/ui components are pre-configured and can be added via CLI
- Tests run with `pnpm test` using Vitest in Nuxt environment
- TailwindCSS processes through PostCSS pipeline
- Static assets in `public/` are served directly

## Coding Style Guide

The following sections provide guidance on how to code specific things and should always be followed unless there's a specific conflict with another rule(s), at which point you should stop and ask about the conflict.

### Vue.js development

- Always explicitly import external modules—be they components, composables, or anything else.

### Semantic markup and a11y

- Always attempt to use specific, semantic markup over generic tags like, `div` and `span`.
- Use `role` and `aria-` attributes whenever possible, but don't use them for the sake of adding them; they should be used in accordance with modern web standards for designing accessibile content
- Make the following accessibility concerns a central focus when dealing with markup, styling, and using any other methods that improve accessibility:
  - Screen Reader Support - Ensuring content works with assistive technologies like NVDA, JAWS, and VoiceOver through proper semantic HTML, heading structures, and descriptive text for images.
  - Color and Contrast - Meeting WCAG contrast ratios (4.5:1 for normal text, 3:1 for large text) and never relying solely on color to convey information.
  - Text and Typography - Using readable fonts, allowing text resizing up to 200%, providing sufficient line spacing, and avoiding text in images when possible.
  - Keyboard Navigation - Ensuring all interactive elements are reachable and operable via keyboard, with visible focus indicators and logical tab order.
  - Touch and Click Targets - Making interactive elements at least 44x44 pixels and providing adequate spacing between targets.
  - Motion and Animation - Respecting `prefers-reduced-motion` settings, avoiding auto-playing content, and providing pause/stop controls for moving content.
  - Clear Navigation - Consistent layouts, descriptive link text, breadcrumbs, and skip links to help users orient themselves.
  - Content Structure - Logical heading hierarchies, clear language, sufficient time limits, and error prevention/correction mechanisms.
  - Focus Management - Proper focus handling in dynamic content, modals, and single-page applications.
  - ARIA (Accessible Rich Internet Applications) - Using roles, properties, and states to enhance semantic meaning when HTML alone isn't sufficient. Key attributes include `aria-label`, `aria-describedby`, `aria-live`, and `role`.
  - Semantic HTML - Using appropriate HTML elements (buttons for actions, links for navigation, headings for structure) rather than generic divs and spans.
  - Form Accessibility - Proper labels, fieldsets, error messaging, and instructions for form controls.

### Component Styles

- Component styles should always utilize Tailwind classses
- Tailwind classes should be applied through usage of the `@apply` directive in scoped style blocks (ie, `<style lang="css" scoped></style>`) in order to keep HTML and component markup clean
- Prioritize using attribute selectors (ie, `role`, `aria-label`) to target styles, followed by plain, semantic element names (ie, `a`, `nav`, `ul`, `li`, etc.), and then finally a descriptive classname when generic `div` tags or components are encountered
  - Examples: `nav[role="navigation"]`, `p[aria-label="Professional tagline"]`, `header`, `li`, `a`, `.avatar-wrapper`, `.avatar`
- Separate large numbers of Tailwind classnames by category with separate `@apply` directives. They should be organized by typographic concerns, pseudo classes, spacing, etc. Use your best judgement to in categorically organizing styles onto separate lines.
- Avoid nested style selectors unless using media queries

## Testing Guidelines

The following guidelines should be followed when writing tests for this Nuxt 4 application, based on lessons learned from testing composables and framework integrations.

These guidelines have been established for the interim until we start using Playwright more extensively.

### Testing Strategy by Component Type

**Composables that use Nuxt framework APIs** (like `useHead`, `useRoute`, `useState`, etc.):

- **PREFER**: Integration tests using `@nuxt/test-utils/e2e`
- **AVOID**: Unit tests with complex mocking of framework internals
- **WHY**: Framework APIs have complex internal dependencies that are fragile to mock and not meant for direct mocking

**Pure business logic functions**:

- **PREFER**: Unit tests with simple mocking
- **AVOID**: Integration tests for simple logic
- **WHY**: Pure functions are easier to test in isolation and don't require framework context

**Vue components**:

- **PREFER**: Component tests using `@vue/test-utils` with Nuxt test utilities
- **AVOID**: Complex mocking of component dependencies
- **WHY**: Components should be tested for their rendered output and user interactions

### Testing Best Practices

1. **Focus on behavior over implementation**: Test what the user/browser experiences, not internal implementation details

2. **Use Nuxt's official testing utilities**: Always prefer `@nuxt/test-utils/e2e` and `@nuxt/test-utils` over custom test setups

3. **Test the rendered output**: For composables that affect the DOM (like `useHead`), verify the actual HTML output rather than mocking internal calls

4. **Keep tests minimal but effective**: Cover essential functionality without over-testing. Early in development, basic checks are sufficient

5. **Avoid complex mocking**: If mocking becomes complex or requires understanding framework internals, consider switching to integration tests

### Common Testing Patterns

**For composables using framework APIs**:

```typescript
import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils/e2e";

describe("MyComposable Integration", async () => {
  await setup({
    // run nuxt in test mode
  });

  it("should have expected behavior in rendered output", async () => {
    const html = await $fetch("/");
    expect(html).toContain("expected content");
  });
});
```

**For pure utility functions**:

```typescript
import { describe, it, expect } from "vitest";
import { myUtilFunction } from "@/lib/utils";

describe("myUtilFunction", () => {
  it("should return expected result for given input", () => {
    expect(myUtilFunction("input")).toBe("expected output");
  });
});
```

### What to Avoid

- **DON'T** mock `useHead`, `useRoute`, `useState`, or other core Nuxt composables
- **DON'T** mock Vue's internal injection context or symbols
- **DON'T** test implementation details that could change with framework updates
- **DON'T** write overly complex test setups that are harder to maintain than the code being tested

### Test File Organization

- Place integration tests in `tests/` directory following the same structure as `app/`
- Use descriptive test file names: `useAnalytics.test.ts`, `component-name.test.ts`
- Group related tests using `describe` blocks with clear naming
