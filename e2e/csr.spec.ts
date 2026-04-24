import { test, expect } from "@playwright/test";

test.describe("CSR page", () => {
  test("renders heading and client time", async ({ page }) => {
    await page.goto("/csr");
    await expect(page.getByRole("heading", { name: /CSR — Client-Side Rendering/ })).toBeVisible();
    await expect(page.getByText(/Client time:/)).toBeVisible();
  });

  test("counter increments and decrements correctly", async ({ page }) => {
    await page.goto("/csr");
    const counter = page.locator("span.font-mono.text-lg.font-bold");
    await expect(counter).toHaveText("0");

    await page.getByRole("button", { name: "+" }).click();
    await expect(counter).toHaveText("1");

    await page.getByRole("button", { name: "+" }).click();
    await expect(counter).toHaveText("2");

    await page.getByRole("button", { name: "-" }).click();
    await expect(counter).toHaveText("1");
  });

  test("has a back link to home", async ({ page }) => {
    await page.goto("/csr");
    await page.getByRole("link", { name: /Home/ }).click();
    await expect(page).toHaveURL("/");
  });
});
