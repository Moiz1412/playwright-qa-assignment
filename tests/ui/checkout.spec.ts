import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CheckoutPage } from "../../pages/CheckoutPage";

test("user can complete the checkout flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login("standard_user", "secret_sauce");

  await productsPage.addTwoProducts();

  await checkoutPage.openCart();

  await checkoutPage.clickCheckout();

  await checkoutPage.fillCheckoutInformation("Moiz", "Tester", "390001");

  await checkoutPage.clickContinue();

  await checkoutPage.clickFinish();

  await checkoutPage.verifyOrderConfirmation();
});
