import { describe, it, expect } from "vitest";
import { ErrorBoundary } from "./error-boundary";

describe("ErrorBoundary", () => {
  it("getDerivedStateFromError sets hasError: true with the error", () => {
    const error = new Error("something broke");
    const state = ErrorBoundary.getDerivedStateFromError(error);
    expect(state.hasError).toBe(true);
    expect(state.error).toBe(error);
  });

  it("getDerivedStateFromError preserves the error message", () => {
    const error = new Error("network failure");
    const state = ErrorBoundary.getDerivedStateFromError(error);
    expect(state.error?.message).toBe("network failure");
  });
});
