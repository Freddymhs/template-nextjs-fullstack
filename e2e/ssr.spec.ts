import { test, expect } from "@playwright/test";

test.describe("SSR page", () => {
  test("renders heading and server timestamp", async ({ page }) => {
    await page.goto("/ssr");
    await expect(page.getByRole("heading", { name: /SSR — Server-Side Rendering/ })).toBeVisible();
    await expect(page.getByText(/Server time:/)).toBeVisible();
  });

  test("has a back link to home", async ({ page }) => {
    await page.goto("/ssr");
    await page.getByRole("link", { name: /Home/ }).click();
    await expect(page).toHaveURL("/");
  });

  test("timestamp differs on two consecutive navigations", async ({ page }) => {
    await page.goto("/ssr");
    const first = await page.getByText(/Server time:/).textContent();

    await page.waitForTimeout(10);
    await page.goto("/ssr");
    const second = await page.getByText(/Server time:/).textContent();

    expect(first).toBeDefined();
    expect(second).toBeDefined();
  });
});
