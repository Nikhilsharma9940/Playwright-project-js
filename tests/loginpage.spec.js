const {test, expect} = require('@playwright/test');

test("Login Page",async ({page})=>{


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.fill("#username", "rahulshettyacademy");
    await page.fill("#password","learning");
    await page.click("#signInBtn")
    await page.locator(".card-body a").first().waitFor();
    //await page.waitForSelector('//*[contains(text(),"Checkout")]')
    //await page.waitForLoadState('networkidle')
    const products = await page.locator(".card-body a")
    const alltitles = await products.allTextContents()
    console.log(alltitles)




})