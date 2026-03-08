"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CSRPage() {
  const [clientTime, setClientTime] = useState<string>(() => new Date().toISOString());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClientTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <Link href="/" className="text-orange-500 hover:underline text-sm">
        &larr; Home
      </Link>

      <div className="mt-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-orange-500" />
          <h1 className="text-3xl font-bold">CSR — Client-Side Rendering</h1>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            This page runs entirely in the <strong>browser</strong>. Interactive state, real-time
            updates, no server involvement after initial load.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
            <p className="font-mono text-sm">Client time: {clientTime || "Loading..."}</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCount((prev) => prev - 1)}
                className="px-3 py-1 bg-orange-100 rounded hover:bg-orange-200"
              >
                -
              </button>
              <span className="font-mono text-lg font-bold">{count}</span>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="px-3 py-1 bg-orange-100 rounded hover:bg-orange-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2">
            <p className="font-semibold">When to use CSR:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Highly interactive components (forms, maps, editors)</li>
              <li>Real-time data (WebSocket, polling)</li>
              <li>User-specific UI that doesn&apos;t need SEO</li>
            </ul>
          </div>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
            {`"use client";

import { useState, useEffect } from "react";

// Client Components run in the browser
// Use for interactivity, browser APIs, state`}
          </pre>
        </div>
      </div>
    </main>
  );
}
