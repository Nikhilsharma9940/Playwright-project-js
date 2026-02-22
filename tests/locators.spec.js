const {test, expect} = require('@playwright/test');

test("locators",async ({page})=>{


    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("id=login2").click()

    //await page.click("id=login2")

    await page.fill("#loginusername","pavanol")

    await page.fill("#loginpassword","test@123")

    await page.click("//button[normalize-space()='Log in']")

    const logOutLink = await page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logOutLink).toBeVisible();

    await page.close()




})