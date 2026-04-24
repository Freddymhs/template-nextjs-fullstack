import { test, expect } from "@playwright/test";

test.describe("ISR page", () => {
  test("renders heading, generated timestamp and revalidation note", async ({ page }) => {
    await page.goto("/isr");
    await expect(
      page.getByRole("heading", { name: /ISR — Incremental Static Regeneration/ }),
    ).toBeVisible();
    await expect(page.getByText(/Generated at:/)).toBeVisible();
    await expect(page.getByText(/Revalidates every 60s/)).toBeVisible();
  });

  test("has a back link to home", async ({ page }) => {
    await page.goto("/isr");
    await page.getByRole("link", { name: /Home/ }).click();
    await expect(page).toHaveURL("/");
  });
});
