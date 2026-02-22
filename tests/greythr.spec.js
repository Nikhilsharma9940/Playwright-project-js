const { test, expect } = require('@playwright/test');

test('Grethr logout', async({page})=>{

    await page.goto("https://lms-solutions.greythr.com/")
    await page.fill("#username", "LMS469")
    await page.fill("#password", "Newworld@9877")
    
    await page.locator("//button[@type='submit']").click()
    
})