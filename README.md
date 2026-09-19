# Playwright QA Assignment

This project contains UI and API automation tests built using **Playwright** and **TypeScript**.

The UI tests automate the required scenarios on SauceDemo, while the API tests validate the required ReqRes API endpoints.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Chromium
- SauceDemo
- ReqRes API

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
