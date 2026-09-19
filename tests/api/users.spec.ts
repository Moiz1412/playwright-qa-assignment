import { test, expect } from "@playwright/test";

test.describe("Users API", () => {
  test("GET users from page 2", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2");

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.data).toBeDefined();
    expect(Array.isArray(responseBody.data)).toBe(true);

    for (const user of responseBody.data) {
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("first_name");
      expect(user).toHaveProperty("last_name");
    }
  });

  test("POST create a new user", async ({ request }) => {
    const user = {
      name: "morpheus",
      job: "leader",
    };

    const response = await request.post("https://reqres.in/api/users", {
      data: user,
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.name).toBe(user.name);
    expect(responseBody.job).toBe(user.job);
    expect(responseBody.id).toBeTruthy();
    expect(responseBody.createdAt).toBeTruthy();
  });

  test("POST create user and verify response", async ({ request }) => {
    const user = {
      name: "morpheus",
      job: "leader",
    };

    const response = await request.post("https://reqres.in/api/users", {
      data: user,
    });

    expect(response.status()).toBe(201);

    const createdUser = await response.json();

    expect(createdUser).toMatchObject(user);
    expect(createdUser.id).toBeTruthy();
    expect(createdUser.createdAt).toBeTruthy();
  });
});
