# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `pnpm dev` (starts on http://localhost:3000)
- **Build for production**: `pnpm build`
- **Preview production build**: `pnpm preview`
- **Generate static site**: `pnpm generate`
- **Install dependencies**: `pnpm install`
- **Run tests**: `pnpm test`

## Architecture Overview

This is a **Nuxt 4** portfolio website built with Vue 3, TypeScript, and Tailwind CSS. The site showcases work experience and projects using a content-driven architecture.

### Key Technologies

- **Framework**: Nuxt 4 with Vue 3 and TypeScript
- **Styling**: Tailwind CSS with shadcn-vue components (New York style)
- **Content**: Nuxt Content v3 with structured collections
- **Icons**: Lucide Vue Next
- **Fonts**: Inter (sans-serif) and Playfair Display (serif/display)

### Project Structure

- **`app/`**: Main application code following Nuxt 4 structure

  - `pages/`: Route pages (index, work, writing)
  - `components/`: Vue components organized by purpose
    - `layout/`: Site-wide layout components
    - `ui/`: shadcn-vue UI components
    - `work/`: Work-specific components for content display
  - `composables/`: Vue composables for reusable logic
  - `types/`: TypeScript type definitions

- **`content/`**: Markdown content files organized in collections
  - `experience/`: Work experience entries
  - `projects/`: Project portfolio entries

### Content Architecture

The site uses **Nuxt Content collections** defined in `content.config.ts`:

- **Experience Collection**: Work history with title, description, aside fields
- **Projects Collection**: Portfolio items with title, footer, aside fields

Content is dynamically loaded and displayed using:

- `queryCollection()` API for fetching content
- URL hash-based routing for drawer navigation (`#item-id`)
- Real-time content rendering with `ContentRenderer`

### Work Page & Drawer System

The `/work` page implements a sophisticated drawer interface:

- **Three-column responsive grid** layout (`LayoutContentGrid`)
- **Content columns** display experience and projects (`WorkContentColumn`)
- **Dynamic drawer** opens on the right for detailed content (`WorkContentDrawer`)
- **Hash-based navigation** enables direct linking to specific items
- **Responsive positioning** calculated by `useDrawerPositioning` composable

The drawer positioning system (`app/composables/useDrawerPositioning.ts`) handles:

- Dynamic positioning based on viewport and content layout
- Responsive behavior for different screen sizes
- Real-time recalculation on window resize

### Component System

- **shadcn-vue integration**: UI components in `app/components/ui/`
- **Custom drawer implementation**: Using vaul-vue with custom positioning
- **Tailwind CSS variables**: Theme customization via CSS custom properties
- **Component composition**: Reusable components with clear separation of concerns

## File Naming & Organization

- Vue components use PascalCase (e.g., `ContentDrawer.vue`)
- Content files use kebab-case with numeric prefixes (e.g., `01.project-name.md`)
- Types are defined in dedicated `types/` directory
- Composables follow `use[Name]` convention

## Content Management

Content is managed through:

- Markdown files in `content/` directory
- Schema validation via Zod in `content.config.ts`
- Automatic collection generation and querying
- Frontmatter-based metadata for structured content

## Testing

The project uses **Vitest** with Nuxt Test Utils for end-to-end testing:

- **Test framework**: Vitest with Nuxt environment
- **Test utilities**: @nuxt/test-utils for E2E testing
- **DOM environment**: happy-dom for lightweight DOM simulation
- **Configuration**: Custom vitest.config.ts with thread pool optimization

### Test Structure

- **`tests/`**: Test files organized by functionality
  - `smoke.test.ts`: Basic site functionality and page rendering tests
- **Test patterns**: E2E tests using `$fetch()` for server-side rendering validation
- **Coverage**: Tests verify page rendering, content loading, and basic site structure
