import Link from "next/link";

const RENDERING_DEMOS = [
  {
    href: "/ssr",
    title: "SSR",
    description: "Server-Side Rendering — fresh data on every request",
    color: "bg-blue-500",
  },
  {
    href: "/ssg",
    title: "SSG",
    description: "Static Site Generation — built at build time",
    color: "bg-green-500",
  },
  {
    href: "/isr",
    title: "ISR",
    description: "Incremental Static Regeneration — static + revalidation",
    color: "bg-purple-500",
  },
  {
    href: "/csr",
    title: "CSR",
    description: "Client-Side Rendering — interactive, browser-only",
    color: "bg-orange-500",
  },
] as const;

// This is a React Server Component (RSC) by default in Next.js App Router
export default function HomePage() {
  const buildTime = new Date().toISOString();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Next.js Fullstack Template</h1>
        <p className="text-gray-500 text-lg">
          Production-ready starter with every rendering strategy built in.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          This page is a <strong>React Server Component (RSC)</strong> — rendered on the server at{" "}
          {buildTime}
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {RENDERING_DEMOS.map((demo) => (
          <Link
            key={demo.href}
            href={demo.href}
            className="block p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={`w-3 h-3 rounded-full ${demo.color}`} />
              <h2 className="text-xl font-semibold">{demo.title}</h2>
            </div>
            <p className="text-gray-500 text-sm">{demo.description}</p>
          </Link>
        ))}
      </section>

      <section className="text-center text-sm text-gray-400">
        <p>
          API Route: <code className="bg-gray-100 px-2 py-1 rounded text-gray-600">/api/hello</code>
        </p>
      </section>
    </main>
  );
}
