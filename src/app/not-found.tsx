import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2">404</h2>
        <p className="text-gray-500 mb-4">Page not found</p>
        <Link
          href="/"
          className="px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 inline-block"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
