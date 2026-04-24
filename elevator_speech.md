# Next.js Fullstack Template — Elevator Pitch

## ENGLISH

**Context:** Every Next.js project starts the same painful way — wiring ESLint, setting up Husky, configuring security headers, writing the first test, figuring out how to handle errors across server and client boundaries. This template eliminates that friction. It's aimed at developers who need a production-grade Next.js 16 foundation they can clone and immediately extend, without spending the first sprint on tooling.

**The Decision:** Next.js App Router with React Server Components as the default, not the exception. Every rendering strategy — RSC, SSR, SSG, ISR, CSR — ships as a working demo page, not a commented-out snippet. The choice over a simpler Create React App or Vite setup is intentional: the template teaches the rendering model by making each pattern observable and testable from day one. TypeScript strict mode with no `any` escape hatch enforces correctness at the type layer before tests even run.

**One Real Challenge:** Client-only values like `Date.now()` and intervals in React 19 cause silent hydration mismatches — server renders one thing, client renders another, React throws. The fix isn't obvious: initialize state as `null`, populate only inside `useEffect`, and show a fallback ("Loading...") until the browser takes over. The CSR page demonstrates this pattern correctly. Miss it and you ship invisible bugs that only surface at runtime.

**Why It's Production-Ready:**

- **27 tests, zero gaps** — 11 unit tests (utility, API route, constants, ErrorBoundary) + 16 E2E via Playwright covering every rendering strategy, interactive state, and API shape
- **Defense in depth on errors** — Next.js `error.tsx` catches RSC failures server-side; a React class `ErrorBoundary` wraps the entire app in `layout.tsx` for client-side catches. Two layers, one goes down, the other holds
- **CI as a quality gate, not an afterthought** — GitHub Actions runs lint → typecheck → build → unit tests → E2E in strict sequence; any failure blocks the merge. `--frozen-lockfile` ensures no dependency drift between environments

**The Insight:** Security headers (X-Frame-Options, CSP, Referrer-Policy, Permissions-Policy) are configured globally in `next.config.ts` on day zero — not added later when a security review flags them. A template that bakes in correctness and security from the first commit changes what "starting from scratch" means.

---

## ESPAÑOL

**Contexto:** Todo proyecto Next.js empieza de la misma manera dolorosa — configurar ESLint, instalar Husky, agregar security headers, escribir el primer test, descubrir cómo manejar errores en boundaries entre server y client. Este template elimina esa fricción. Está pensado para desarrolladores que necesitan una base Next.js 16 lista para producción que puedan clonar y extender de inmediato, sin gastar el primer sprint en tooling.

**La Decisión:** Next.js App Router con React Server Components como default, no como excepción. Cada estrategia de rendering — RSC, SSR, SSG, ISR, CSR — viene como una página funcional y demostrable, no como un snippet comentado. La elección frente a soluciones más simples como Vite es intencional: el template enseña el modelo de rendering haciendo cada patrón observable y testeable desde el día uno. TypeScript strict sin escape hatch `any` impone corrección en la capa de tipos antes de que los tests corran.

**Un Problema Real:** Valores exclusivos del cliente como `Date.now()` e intervalos en React 19 generan hydration mismatches silenciosos — el servidor renderiza una cosa, el cliente otra, React lanza un error. El fix no es obvio: inicializar el estado en `null`, poblarlo solo dentro de `useEffect`, y mostrar un fallback ("Loading...") hasta que el browser tome control. La página CSR demuestra este patrón correctamente. Pasarlo por alto significa shipper bugs invisibles que solo aparecen en runtime.

**Por Qué Está Listo para Producción:**

- **27 tests, sin gaps** — 11 unit tests (utility, API route, constants, ErrorBoundary) + 16 E2E via Playwright cubriendo cada estrategia de rendering, estado interactivo y shape de la API
- **Defensa en profundidad en errores** — `error.tsx` de Next.js captura fallas de RSC en el server; un `ErrorBoundary` class component envuelve toda la app en `layout.tsx` para capturas del lado del cliente. Dos capas: si una cae, la otra aguanta
- **CI como gate de calidad, no como accesorio** — GitHub Actions corre lint → typecheck → build → unit tests → E2E en secuencia estricta; cualquier falla bloquea el merge. `--frozen-lockfile` garantiza que no haya drift de dependencias entre entornos

**La Conclusión:** Los security headers (X-Frame-Options, CSP, Referrer-Policy, Permissions-Policy) se configuran globalmente en `next.config.ts` desde el día cero — no se agregan después cuando un security review los señala. Un template que integra corrección y seguridad desde el primer commit cambia lo que significa "arrancar desde cero".
