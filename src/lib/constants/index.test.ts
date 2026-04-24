import { describe, it, expect } from "vitest";
import { APP_NAME } from "./index";

describe("constants", () => {
  it("APP_NAME is a non-empty string", () => {
    expect(typeof APP_NAME).toBe("string");
    expect(APP_NAME.length).toBeGreaterThan(0);
  });

  it("APP_NAME matches expected value", () => {
    expect(APP_NAME).toBe("Next.js Template");
  });
});
