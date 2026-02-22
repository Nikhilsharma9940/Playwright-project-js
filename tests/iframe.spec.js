const { test, expect } = require('@playwright/test');

test('iframe', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const newframe = await page.frameLocator("#courses-iframe")
    await newframe.locator('li a[href*="lifetime-access"]:visible').click()
    const text1 = await newframe.locator(".text h2").textContent()
    console.log(text1.split(" ")[1])

})