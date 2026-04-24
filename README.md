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

## Testing

| Command         | Description                     |
| --------------- | ------------------------------- |
| `pnpm test:run` | Unit tests (Vitest + happy-dom) |
| `pnpm test:e2e` | E2e tests (Playwright)          |

## Conventions

- `@/` path alias for `src/`
- Named exports for components
- `PascalCase` components, `camelCase` functions, `kebab-case` files
- `const` only — no `let`
- Strict TypeScript — no `any`

---

## Verificación

Todo lo siguiente está comprobado y funcionando al 100%.

### Calidad de código

| Check             | Comando           |
| ----------------- | ----------------- |
| Lint              | `pnpm lint`       |
| Tipado estricto   | `pnpm type-check` |
| Build (Turbopack) | `pnpm build`      |

### Tests unitarios (11/11)

```bash
pnpm test:run
```

| Suite                         | Cubre                                                                |
| ----------------------------- | -------------------------------------------------------------------- |
| `utils/index.test.ts` (3)     | `cn()`: join, falsy filter, sin args                                 |
| `api/hello/route.test.ts` (4) | GET message + ISO timestamp, POST echo body + nested body            |
| `constants/index.test.ts` (2) | `APP_NAME` tipo string no vacío, valor exacto                        |
| `error-boundary.test.tsx` (2) | `getDerivedStateFromError` setea `hasError: true` + preserva message |

### Tests e2e (16/16)

```bash
pnpm build && pnpm test:e2e
```

| Suite              | Cubre                                                     |
| ------------------ | --------------------------------------------------------- |
| `home.spec.ts` (4) | Título, 4 links de estrategia, referencia API, navegación |
| `ssr.spec.ts` (3)  | Heading, server timestamp, back link                      |
| `ssg.spec.ts` (2)  | Heading + build time, back link                           |
| `isr.spec.ts` (2)  | Heading + revalidación 60s, back link                     |
| `csr.spec.ts` (3)  | Heading + client time, counter +/-, back link             |
| `api.spec.ts` (2)  | GET JSON shape, POST echo                                 |

### Runtime verificado en navegador

| Ruta             | Resultado                                                             |
| ---------------- | --------------------------------------------------------------------- |
| `GET /`          | RSC renderizado en server, 4 cards de estrategia visibles             |
| `GET /ssr`       | Timestamp fresco en cada request (`force-dynamic`)                    |
| `GET /ssg`       | Timestamp fijo del build time (`force-static`)                        |
| `GET /isr`       | Timestamp estático + nota "Revalidates every 60s" (`revalidate = 60`) |
| `GET /csr`       | Clock en tiempo real + counter interactivo sin hydration error        |
| `GET /api/hello` | JSON `{ message, timestamp }`                                         |
| Ruta inexistente | 404 custom con botón "Go home"                                        |

### CI (GitHub Actions)

`pnpm install` → `pnpm lint` → `pnpm type-check` → `pnpm build` → `pnpm test:run` → `playwright install chromium` → `pnpm test:e2e`  
Corre en cada push y PR a main/master.

### Pipeline de commits (local)

`git commit` → husky → lint-staged → `eslint --fix` + `prettier --write` (solo archivos staged)

### Gaps conocidos

- **Sin Docker**: no incluido en este template — el deploy habitual es Vercel (`next build` + `next start` o export estático)
- **Sin auth**: no incluido — se agrega por proyecto
- **E2e en CI requiere build previo**: el `webServer` en Playwright config usa `pnpm start` en CI, así que el job hace `pnpm build` antes de `pnpm test:e2e`
