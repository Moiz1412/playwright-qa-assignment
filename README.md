# Playwright QA Assignment

Playwright + TypeScript automation covering UI and API scenarios.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Chromium

## Project Structure

```text
my-qa-assignment/
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts
│   │   ├── cart.spec.ts
│   │   └── checkout.spec.ts
│   └── api/
│       └── users.spec.ts
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── CheckoutPage.ts
├── playwright.config.ts
├── package.json
└── README.md
````

## Installation

Prerequisites: Node.js and npm.

```bash
npm install
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/ui
```

Run API tests:

```bash
npx playwright test tests/api
```

Run UI tests with the browser visible:

```bash
npx playwright test tests/ui --headed
```

View the HTML report:

```bash
npx playwright show-report
```

## UI Tests

### `tests/ui/login.spec.ts`

* Standard user login
* Locked-out user validation
* Login error message validation

### `tests/ui/cart.spec.ts`

* Add two products to the cart
* Verify cart badge is `2`
* Sort products by price low to high
* Verify the first product has the lowest price

### `tests/ui/checkout.spec.ts`

* Add products to cart
* Complete checkout
* Verify `Thank you for your order!`

## API Tests

### `tests/api/users.spec.ts`

* GET `/api/users?page=2`
* Validate status and user fields
* POST `/api/users`
* Validate name, job, id and createdAt
* Bonus create-and-verify flow

## Page Objects

* `LoginPage.ts` — Login actions
* `ProductsPage.ts` — Product, cart and sorting actions
* `CheckoutPage.ts` — Checkout actions

## Test Approach

* Page Object Model for UI tests
* Independent test cases
* Playwright semantic and `data-test` locators
* Focused assertions
* `async/await`
* Playwright built-in waiting
* Playwright `request` fixture for API testing
