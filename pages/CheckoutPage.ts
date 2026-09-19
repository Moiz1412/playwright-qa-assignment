import { expect, Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async clickCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);

    await this.page.locator('[data-test="lastName"]').fill(lastName);

    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
  }

  async clickContinue() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async clickFinish() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async verifyOrderConfirmation() {
    await expect(
      this.page.getByText("Thank you for your order!"),
    ).toBeVisible();
  }
}
