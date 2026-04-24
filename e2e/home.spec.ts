import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders title and all 4 strategy links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Next.js Fullstack Template" })).toBeVisible();
    await expect(page.getByRole("link", { name: /SSR/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /SSG/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /ISR/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /CSR/ })).toBeVisible();
  });

  test("shows API route reference", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("/api/hello")).toBeVisible();
  });

  test("navigates to SSR page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /SSR/ }).click();
    await expect(page).toHaveURL("/ssr");
  });

  test("navigates to CSR page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /CSR/ }).click();
    await expect(page).toHaveURL("/csr");
  });
});
