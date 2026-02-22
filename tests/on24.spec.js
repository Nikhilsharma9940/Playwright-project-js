import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wccqa.on24.com/webcast/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('prodesnew');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('Password009');
  await page.getByTestId('Login_submitButton').click();
  await page.getByText('Select Account').click();
  await page.getByRole('option', { name: 'paulpexip20' }).click();
});