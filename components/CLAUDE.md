# Component Development Guidelines

This document provides specific guidelines for component development in this Nuxt 3 project. These guidelines complement the main project documentation in the root CLAUDE.md file.

## Component-Specific Code Style and Structure

### Component Organization

- Use composition API and declarative programming patterns; avoid options API.
- Structure component files in this order:
  1. Exported component with `<script setup>`
  2. Composables and reactive state
  3. Helper functions and utilities
  4. Static content and constants
  5. TypeScript types and interfaces

### Script Setup Syntax

- Use `<script setup>` syntax for concise component definitions.
- Place script tags at the top of each file and place the template below it.
- Leverage `ref`, `reactive`, and `computed` for reactive state management.

### Component Naming and File Structure

- Use PascalCase for component names (e.g., `AuthWizard.vue`).
- Use lowercase with dashes for component directories (e.g., `components/auth-wizard`).
- Organize components by feature or functionality in subdirectories.

### TypeScript in Components

- Use TypeScript for all component code; prefer types over interfaces.
- Avoid enums; use const objects instead.
- Use Vue 3 with TypeScript, leveraging `defineComponent` and `PropType` when needed.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).

### Component Syntax and Formatting

- Use arrow functions for methods and computed properties.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use template syntax for declarative rendering.
- Use early returns whenever possible to make the code more readable.

## UI and Styling Guidelines

### Component Libraries

- Use Shadcn Vue, Radix Vue, and Tailwind for components and styling.
- Prefer Shadcn Vue over Radix Vue for initial component needs and rely on Radix Vue when Shadcn Vue doesn't have what is needed.
- **Important**: Please state when Shadcn Vue doesn't have what we need and always ask for confirmation first before proceeding when this scenario is encountered.

### Styling Approach

- Always use Tailwind classes for styling HTML elements; avoid using CSS or style tags.
- Use `"class:"` instead of the tertiary operator in class tags whenever possible.
- Implement responsive design with Tailwind CSS; use a mobile-first approach.
- Use `@apply` with BEM-style approach for component-specific styling when needed.

### Accessibility

- Implement accessibility features on elements.
- For example, a clickable element should have `tabindex="0"`, `aria-label`, `@click`, and `@keydown`, and similar attributes.
- Use semantic HTML elements when possible.

## Component Architecture Best Practices

### Composition and Reusability

- Prefer component composition over elaborate param schemes or inheritance.
- Use provide/inject for dependency injection when appropriate.
- Implement custom composables for reusable logic.
- Write concise, technical TypeScript code with accurate examples.

### Event Handling

- Event functions should be named with a "handle" prefix, like `handleClick` for `@click` and `handleKeyDown` for `@keydown`.
- Use consts instead of functions, for example, `const toggle = () =>`. Also, define a type if possible.

### State Management

- Use VueUse for common composables and utility functions.
- Use Pinia for state management when component state needs to be shared.
- Keep component state local when possible.

### Performance Considerations

- Use Suspense for asynchronous components.
- Implement lazy loading for heavy components.
- Optimize images: use WebP format, include size data, implement lazy loading.
- Leverage Nuxt's auto-imports feature for components and composables.

## Nuxt-Specific Component Guidelines

### Auto-imports

- Utilize Nuxt's auto-imports feature for components and composables.
- Components in the `components/` directory are automatically imported.
- Follow Nuxt 3 directory structure conventions.

### Data Fetching in Components

- Use `useFetch` and `useAsyncData` for data fetching within components.
- Implement proper loading and error states.

### SEO and Meta

- Use `useHead` and `useSeoMeta` for component-specific SEO needs.
- Implement proper meta tags for components that affect page structure.

## Component Development Process

### Before Creating Components

1. Check if a similar component already exists in the project.
2. Review existing components to understand the established patterns.
3. Determine if Shadcn Vue has the needed component before creating custom ones.
4. Consider framework choice, naming conventions, and typing requirements.

### During Development

- Follow the project's existing code conventions and patterns.
- Use the established component library and styling approach.
- Implement proper TypeScript typing.
- Add necessary accessibility features.

### After Development

- Test component functionality and responsiveness.
- Verify accessibility compliance.
- Ensure proper TypeScript types are exported if needed.
- Document any complex component logic or usage patterns.

## Key Reminders

- Leave NO todo's, placeholders or missing pieces in components.
- Ensure component code is complete and fully functional.
- Include all required imports and ensure proper naming.
- Focus on readable, maintainable code over performance optimization.
- Follow DRY principles and avoid code duplication.