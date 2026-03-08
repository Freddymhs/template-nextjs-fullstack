import Link from "next/link";

// Force dynamic rendering — no caching, fresh on every request
export const dynamic = "force-dynamic";

export const metadata = { title: "SSR Demo" };

export default async function SSRPage() {
  const timestamp = new Date().toISOString();

  // Example: fetch data on every request
  // const data = await fetch("https://api.example.com/data", { cache: "no-store" });

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline text-sm">
        &larr; Home
      </Link>

      <div className="mt-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          <h1 className="text-3xl font-bold">SSR — Server-Side Rendering</h1>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            This page is rendered on the <strong>server on every request</strong>. Refresh to see
            the timestamp change.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-mono text-sm">Server time: {timestamp}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2">
            <p className="font-semibold">When to use SSR:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Data must be fresh on every request</li>
              <li>Personalized content (user dashboards, auth-gated pages)</li>
              <li>Search results, real-time data</li>
            </ul>
          </div>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
            {`// Force dynamic rendering
export const dynamic = "force-dynamic";

// Or use no-store fetch
const data = await fetch(url, { cache: "no-store" });`}
          </pre>
        </div>
      </div>
    </main>
  );
}
