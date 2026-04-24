import { test, expect } from "@playwright/test";

test.describe("API /api/hello", () => {
  test("GET returns message and valid timestamp", async ({ request }) => {
    const response = await request.get("/api/hello");
    expect(response.ok()).toBe(true);

    const data = (await response.json()) as { message: string; timestamp: string };
    expect(data.message).toBe("Hello from the API!");
    expect(() => new Date(data.timestamp).toISOString()).not.toThrow();
  });

  test("POST echoes body with timestamp", async ({ request }) => {
    const body = { name: "Freddy", value: 42 };
    const response = await request.post("/api/hello", { data: body });
    expect(response.ok()).toBe(true);

    const data = (await response.json()) as { received: typeof body; timestamp: string };
    expect(data.received).toEqual(body);
    expect(typeof data.timestamp).toBe("string");
  });
});
