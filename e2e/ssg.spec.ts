import { test, expect } from "@playwright/test";

test.describe("SSG page", () => {
  test("renders heading and build timestamp", async ({ page }) => {
    await page.goto("/ssg");
    await expect(
      page.getByRole("heading", { name: /SSG — Static Site Generation/ }),
    ).toBeVisible();
    await expect(page.getByText(/Build time:/)).toBeVisible();
  });

  test("has a back link to home", async ({ page }) => {
    await page.goto("/ssg");
    await page.getByRole("link", { name: /Home/ }).click();
    await expect(page).toHaveURL("/");
  });
});
