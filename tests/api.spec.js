const { test, expect } = require('@playwright/test');

test('Validate GET users API - page 2', async ({ request }) => {

  // Send GET request
  const response = await request.get('https://reqres.in/api/users?page=2');

  // 1️⃣ Validate status code
  expect(response.status()).toBe(200);

  // 2️⃣ Parse response body
  /* const responseBody = await response.json();
  console.log(responseBody);

  // 3️⃣ Validate page number
  expect(responseBody.page).toBe(2);

  // 4️⃣ Validate users data is not empty
  expect(responseBody.data.length).toBeGreaterThan(0);

  // 5️⃣ Validate first user fields
  const firstUser = responseBody.data[0];

  expect(firstUser).toHaveProperty('id');
  expect(firstUser).toHaveProperty('email');
  expect(firstUser).toHaveProperty('first_name');
  expect(firstUser).toHaveProperty('last_name');
  expect(firstUser).toHaveProperty('avatar'); */
});