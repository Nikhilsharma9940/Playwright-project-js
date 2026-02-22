const {test, expect} = require('@playwright/test');

test.only("Input Box",async ({page})=>{

await page.goto("https://demo.nopcommerce.com/register")

//await expect(await page.locator("#FirstName")).toBeEmpty();

//await expect(await page.locator("#FirstName")).toBeVisible();

//await expect(await page.locator("#FirstName")).toBeEditable();

//await expect(await page.locator("#FirstName")).toBeEnabled();


//await page.locator("#FirstName").fill("TEST")

//await page.waitForTimeout(5000)


await page.locator('#gender-male').check()

await expect(await page.locator('#gender-male').isChecked()).toBeTruthy();

await expect(await page.locator('#gender-female').isChecked()).toBeFalsy();

await page.waitForTimeout(5000)
await page.locator('#gender-male').isChecked()



})