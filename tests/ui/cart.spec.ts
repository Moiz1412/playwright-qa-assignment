import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

test.describe("Products and Cart", () => {
  test("user can add two products to the cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await productsPage.addTwoProducts();

    await productsPage.verifyCartBadge(2);
  });

  test("products can be sorted by price low to high", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await productsPage.sortByPriceLowToHigh();

    const prices = await productsPage.getProductPrices();

    const lowestPrice = Math.min(...prices);

    expect(prices[0]).toBe(lowestPrice);
  });
});
