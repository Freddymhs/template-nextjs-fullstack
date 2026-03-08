import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { ErrorBoundary } from "@/components/error-boundary";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next.js Fullstack Template",
    template: "%s | Next.js Template",
  },
  description: "A production-ready Next.js fullstack starter template.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <ErrorBoundary>{children}</ErrorBoundary>
        <Toaster position="bottom-right" richColors duration={3000} />
      </body>
    </html>
  );
}
