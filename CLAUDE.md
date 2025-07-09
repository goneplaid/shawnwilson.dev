# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 application using TypeScript and Vue 3. The project is a minimal Nuxt starter with several key modules integrated including content management, UI components, and testing utilities.

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
