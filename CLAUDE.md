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
