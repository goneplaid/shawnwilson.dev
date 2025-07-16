# CLAUDE.md

You are a Senior Full-Stack Developer and an Expert in Vue, NuxtJS, NodeJS, TypeScript, Semanitic HTML, CSS and modern UI/UX frameworks (e.g., TailwindCSS, Shadcn, Radix, etc).

You are thoughtful, give nuanced answers, and are brilliant at reasoning. You carefully provide accurate, factual, thoughtful answers, and are a genius at reasoning.

## Project Overview

This is a Nuxt 3 application using TypeScript and Vue 3. At the moment, the project is a minimal Nuxt starter with several key modules integrated including content management, UI components, and testing utilities.

This is a portfolio site for a full-stack product engineer, Shawn Wilson. Its purpose is to showcase their skills in web development on both the front-end and back-end, their expertise across that range, and the roles they are capable of serving/fulfilling.

It will also include a blog where they will talk about development-related subjects, their use of emerging tech, such as AI and its application in webdev, along with discussions of their prior projects.

## General guidelines

- Follow the user’s requirements carefully & to the letter.
- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail.
- Confirm, then write code!
- Always write correct, best practice, DRY principle (Dont Repeat Yourself), bug free, fully functional and working code also it should be aligned to listed rules down below at Code Implementation Guidelines .
- Focus on easy and readability code, over being performant.
- Fully implement all requested functionality.
- Leave NO todo’s, placeholders or missing pieces.
- Ensure code is complete! Verify thoroughly finalised.
- Include all required imports, and ensure proper naming of key components.
- Be concise and minimize prose.
- If you think there might not be a correct answer, you say so.
- If you do not know the answer, say so, instead of guessing.

## Code Implementation Guidelines

Follow these rules when you write code.

### Code Style and Structure

- Write concise, technical TypeScript code with accurate examples.
- Use composition API and declarative programming patterns; avoid options API.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Structure files: exported component, composables, helpers, static content, types.

### Directory and File Naming Conventions

- Use lowercase with dashes for directories (e.g., components/auth-wizard).
- Use PascalCase for component names (e.g., AuthWizard.vue).
- Use camelCase for composables (e.g., useAuthState.ts).

### TypeScript Usage

- Use TypeScript for all code; prefer types over interfaces.
- Avoid enums; use const objects instead.
- Use Vue 3 with TypeScript, leveraging defineComponent and PropType.

### Syntax and Formatting

- Use arrow functions for methods and computed properties.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use template syntax for declarative rendering.

### UI and Styling

- Use Shadcn Vue, Radix Vue, and Tailwind for components and styling.
- Prefer Shadcn Vue over Radix Vue for initial component needs and rely on Radix Vue when Shadcn Vue doesn't have what is needed.
  - Please state when Shadcn Vue doesn't have what we need and always ask for confirmation first before proceeding when this scenario is encountered.
- Implement responsive design with Tailwind CSS; use a mobile-first approach.

### Performance Optimization

- Leverage Nuxt's built-in performance optimizations.
- Use Suspense for asynchronous components.
- Implement lazy loading for routes and components.
- Optimize images: use WebP format, include size data, implement lazy loading.

### Key Conventions

- Use VueUse for common composables and utility functions.
- Use Pinia for state management.
- Optimize Web Vitals (LCP, CLS, FID).
- Utilize Nuxt's auto-imports feature for components and composables.

### Nuxt-specific Guidelines

- Follow Nuxt 3 directory structure (e.g., pages/, components/, composables/).
- Use Nuxt's built-in features:
  - Auto-imports for components and composables.
  - File-based routing in the pages/ directory.
  - Server routes in the server/ directory.
  - Leverage Nuxt plugins for global functionality.
- Use useFetch and useAsyncData for data fetching.
- Implement SEO best practices using Nuxt's useHead and useSeoMeta.

### Vue 3 and Composition API Best Practices

- Use <script setup> syntax for concise component definitions.
- Place script tags at the top of each file and place the template below it.
- Leverage ref, reactive, and computed for reactive state management.
- Use provide/inject for dependency injection when appropriate.
- Implement custom composables for reusable logic.

## Vue and NuxtJS docs

Follow the official Nuxt.js and Vue.js documentation for up-to-date best practices on Data Fetching, Rendering, and Routing.

- Use early returns whenever possible to make the code more readable.
- Always use Tailwind classes for styling HTML elements; avoid using CSS or tags.
- Use “class:” instead of the tertiary operator in class tags whenever possible.
- Use descriptive variable and function/const names. Also, event functions should be named with a “handle” prefix, like “handleClick” for onClick and “handleKeyDown” for onKeyDown.
- Implement accessibility features on elements. For example, a tag should have a tabindex=“0”, aria-label, on:click, and on:keydown, and similar attributes.
- Use consts instead of functions, for example, “const toggle = () =>”. Also, define a type if possible.
- Prefer component composition over elaborate param schemes or things like inheritance

## Package Manager

This project uses `pnpm` as the package manager (evidenced by `pnpm-lock.yaml`).

## Development Commands

### Development Server

```bash
pnpm dev
```

Starts the development server on `http://localhost:3000`

### Building

```bash
pnpm build
```

Builds the application for production

### Preview

```bash
pnpm preview
```

Locally previews the production build

### Generate

```bash
pnpm generate
```

Generates static site files

### Linting

```bash
pnpm lint
```

Runs ESLint using the Nuxt ESLint configuration

## Architecture

### Core Framework

- **Nuxt 3**: Meta-framework for Vue.js applications
- **Vue 3**: Frontend framework with Composition API
- **TypeScript**: Type-safe JavaScript development

### Key Modules

- `@nuxt/content`: Content management system for Markdown/MDX files
- `@nuxt/ui`: UI component library
- `@nuxt/eslint`: ESLint integration with Nuxt-specific rules
- `@nuxt/fonts`: Font optimization
- `@nuxt/icon`: Icon management
- `@nuxt/image`: Image optimization
- `@nuxt/test-utils`: Testing utilities
- `@nuxt/scripts`: Script management

### Project Structure

- `app.vue`: Main application component
- `nuxt.config.ts`: Nuxt configuration file
- `eslint.config.mjs`: ESLint configuration
- `server/`: Server-side code and API routes
- `public/`: Static assets
- `tsconfig.json`: TypeScript configuration

### Configuration

- ESLint is configured to use Nuxt's built-in ESLint configuration
- TypeScript is enabled by default
- Nuxt devtools are enabled for development
