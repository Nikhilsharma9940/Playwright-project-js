const { test, expect } = require('@playwright/test');
const { LoginPage } = require("../pages/LoginPage")

test('Login with invalid credentials', async ({ page }) => {
  
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('ESREQA', 'Password015');

  await page.waitForTimeout(2000)

  //const error = await loginPage.getErrorMessage();
  //expect(error).toContain('Incorrect');
});