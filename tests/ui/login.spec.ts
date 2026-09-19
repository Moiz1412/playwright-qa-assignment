import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Login", () => {
  test("standard user can login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText("Products")).toBeVisible();
  });

  test("locked out user cannot login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("locked_out_user", "secret_sauce");

    await expect(page.locator('[data-test="error"]')).toContainText(
      "Epic sadface: Sorry, this user has been locked out.",
    );

    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });
});
