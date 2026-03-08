import Link from "next/link";

// Revalidate every 60 seconds — ISR
export const revalidate = 60;

export const metadata = { title: "ISR Demo" };

export default async function ISRPage() {
  const generatedAt = new Date().toISOString();

  // Example: data fetched and cached, revalidated every 60s
  // const data = await fetch(url, { next: { revalidate: 60 } });

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <Link href="/" className="text-purple-500 hover:underline text-sm">
        &larr; Home
      </Link>

      <div className="mt-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-purple-500" />
          <h1 className="text-3xl font-bold">ISR — Incremental Static Regeneration</h1>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            This page is <strong>statically generated</strong> but{" "}
            <strong>revalidates every 60 seconds</strong>. Best of both worlds.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="font-mono text-sm">Generated at: {generatedAt}</p>
            <p className="text-xs text-purple-400 mt-1">Revalidates every 60s</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2">
            <p className="font-semibold">When to use ISR:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Data updates periodically (prices, weather, news)</li>
              <li>Need CDN speed with reasonably fresh data</li>
              <li>High traffic pages where SSR cost is too high</li>
            </ul>
          </div>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
            {`// Page-level revalidation
export const revalidate = 60; // seconds

// Or per-fetch revalidation
const data = await fetch(url, {
  next: { revalidate: 60 },
});

// On-demand revalidation via API
// revalidatePath("/isr");
// revalidateTag("products");`}
          </pre>
        </div>
      </div>
    </main>
  );
}
