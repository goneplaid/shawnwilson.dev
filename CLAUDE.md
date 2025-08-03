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
