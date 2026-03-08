import Link from "next/link";

// Force static generation at build time
export const dynamic = "force-static";

export const metadata = { title: "SSG Demo" };

export default function SSGPage() {
  const buildTime = new Date().toISOString();

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <Link href="/" className="text-green-500 hover:underline text-sm">
        &larr; Home
      </Link>

      <div className="mt-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <h1 className="text-3xl font-bold">SSG — Static Site Generation</h1>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            This page was generated at <strong>build time</strong>. The timestamp below never
            changes until you rebuild.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-mono text-sm">Build time: {buildTime}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2">
            <p className="font-semibold">When to use SSG:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Content rarely changes (landing pages, docs, blog posts)</li>
              <li>Maximum performance — served from CDN</li>
              <li>No per-request server cost</li>
            </ul>
          </div>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
            {`// Force static generation
export const dynamic = "force-static";

// Or use generateStaticParams for dynamic routes
export async function generateStaticParams() {
  return [{ slug: "hello" }, { slug: "world" }];
}`}
          </pre>
        </div>
      </div>
    </main>
  );
}
