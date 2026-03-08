# Next.js Fullstack Template

Production-ready Next.js 16 starter with TypeScript, TailwindCSS 4, and best practices baked in.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** (Server Components by default)
- **TypeScript** (Strict mode)
- **TailwindCSS 4** + PostCSS
- **ESLint 9** (flat config, core-web-vitals + typescript + prettier)
- **Prettier** (auto-format on commit)
- **Husky + lint-staged** (pre-commit quality gate)
- **Vitest + happy-dom** (unit/component testing)
- **Sonner** (toast notifications)
- **Security headers** (X-Frame-Options, CSP, etc.)

## Getting Started

```bash
# Clone
gh repo create my-project --template Freddymhs/template-nextjs-fullstack
# or
npx degit Freddymhs/template-nextjs-fullstack my-project

# Install
cd my-project
pnpm install

# Dev
pnpm dev
```

## Rendering Strategies

This template includes demo pages for every Next.js rendering pattern:

| Route        | Strategy      | Description                                         |
| ------------ | ------------- | --------------------------------------------------- |
| `/`          | **RSC**       | React Server Component (default)                    |
| `/ssr`       | **SSR**       | Server-Side Rendering (`dynamic = "force-dynamic"`) |
| `/ssg`       | **SSG**       | Static Site Generation (`dynamic = "force-static"`) |
| `/isr`       | **ISR**       | Incremental Static Regeneration (`revalidate = 60`) |
| `/csr`       | **CSR**       | Client-Side Rendering (`"use client"`)              |
| `/api/hello` | **API Route** | JSON API endpoint (GET + POST)                      |

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `pnpm dev`          | Start dev server (Turbopack) |
| `pnpm build`        | Production build             |
| `pnpm start`        | Start production server      |
| `pnpm lint`         | Run ESLint                   |
| `pnpm lint:fix`     | Fix lint issues              |
| `pnpm format`       | Format with Prettier         |
| `pnpm format:check` | Check formatting             |
| `pnpm type-check`   | TypeScript type checking     |
| `pnpm test`         | Run tests (watch mode)       |
| `pnpm test:run`     | Run tests (single run)       |

## Project Structure

```
src/
  app/              # App Router pages & layouts
    api/            # API routes
    ssr/            # SSR demo
    ssg/            # SSG demo
    isr/            # ISR demo
    csr/            # CSR demo
  components/       # Reusable components
    ui/             # Base UI components
  lib/
    constants/      # Centralized constants
    utils/          # Utility functions
  types/            # Shared TypeScript types
```

## Conventions

- `@/` path alias for `src/`
- Named exports for components
- `PascalCase` components, `camelCase` functions, `kebab-case` files
- `const` only — no `let`
- Strict TypeScript — no `any`
