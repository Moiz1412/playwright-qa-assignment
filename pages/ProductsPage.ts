import { expect, Page } from "@playwright/test";

export class ProductsPage {
  constructor(private page: Page) {}

  async addTwoProducts() {
    const addToCartButtons = this.page.getByRole("button", {
      name: "Add to cart",
    });

    await addToCartButtons.nth(0).click();
    await addToCartButtons.nth(1).click();
  }

  async verifyCartBadge(count: number) {
    await expect(
      this.page.locator('[data-test="shopping-cart-badge"]'),
    ).toHaveText(String(count));
  }

  async sortByPriceLowToHigh() {
    await this.page
      .locator('[data-test="product-sort-container"]')
      .selectOption("lohi");
  }

  async getProductPrices() {
    const prices = await this.page
      .locator('[data-test="inventory-item-price"]')
      .allTextContents();

    return prices.map((price) => Number(price.replace("$", "")));
  }
}
