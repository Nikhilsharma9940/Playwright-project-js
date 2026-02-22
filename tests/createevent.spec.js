import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wccqa.on24.com/webcast/login');
  await page.getByPlaceholder('Username').fill('ESREQA');
  await page.getByPlaceholder('Password').fill('Password014');
  await page.getByTestId('Login_submitButton').click();
  await page.getByTestId('Events_createEventButton').click();
  await page.getByPlaceholder('Input Event Title').fill('VPB');
  await page.getByTestId('create_startDateDateButton').click();
  await page.getByTestId('create_startDateDateButton').click();
  await page.getByTestId('create_startDate20241115Button').click();
  await page.getByLabel('Live Start Time').click();
  await page.getByLabel('Live Start Time').fill('12:00');
  await page.getByTestId('create_timeZoneSelect').click();
  await page.getByTestId('create_timeZoneSelect').press('ControlOrMeta+f');
  await page.getByTestId('create_timeZoneSelect').fill('kol');
  await page.getByText('(GMT +5:30) Asia/Kolkata').click();
  await page.getByTestId('Create_createWebcast').click();
  await page.goto('https://wccqa.on24.com/webcast/update/84394041');
});