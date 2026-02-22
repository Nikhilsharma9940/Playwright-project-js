const { test, expect } = require('@playwright/test');

test('Home Page', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const options = await page.locator("#country option").allTextContents()
 
    options.forEach(options=> console.log(options));
});