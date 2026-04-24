import { vi, describe, it, expect } from "vitest";
import { GET, POST } from "./route";

vi.mock("next/server", () => ({
  NextResponse: {
    json: (body: unknown) =>
      new Response(JSON.stringify(body), {
        headers: { "Content-Type": "application/json" },
      }),
  },
}));

describe("GET /api/hello", () => {
  it("returns message and timestamp", async () => {
    const response = await GET();
    const data = (await response.json()) as { message: string; timestamp: string };
    expect(data.message).toBe("Hello from the API!");
    expect(typeof data.timestamp).toBe("string");
  });

  it("timestamp is a valid ISO string", async () => {
    const response = await GET();
    const data = (await response.json()) as { timestamp: string };
    expect(() => new Date(data.timestamp).toISOString()).not.toThrow();
  });
});

describe("POST /api/hello", () => {
  it("echoes received body with timestamp", async () => {
    const body = { name: "test", value: 42 };
    const request = new Request("http://localhost/api/hello", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);
    const data = (await response.json()) as { received: typeof body; timestamp: string };
    expect(data.received).toEqual(body);
    expect(typeof data.timestamp).toBe("string");
  });

  it("echoes nested body correctly", async () => {
    const body = { user: { id: 1, name: "Freddy" } };
    const request = new Request("http://localhost/api/hello", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);
    const data = (await response.json()) as { received: typeof body };
    expect(data.received).toEqual(body);
  });
});
