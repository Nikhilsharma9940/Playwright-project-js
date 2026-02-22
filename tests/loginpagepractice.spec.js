const {test, expect} = require('@playwright/test');

test("Login Page Practice",async ({page})=>{


    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator('//*[contains(text(),"Register here")]').click()
    await page.fill("#firstName","Nikhil")
    await page.fill("#lastName","Sharma")
    await page.fill("#userEmail","nikhil.sharma9940@gmail.com")
    await page.fill("#userMobile","8989534644")
    await page.locator('select.ng-valid').selectOption("Doctor")

    await page.locator("//input[@value='Male']").check()
    await page.fill("#userPassword","12345678")
    await page.fill("#confirmPassword","12345678")
    await page.getByRole('checkbox').click()
    await page.click("#login")
    await page.waitForTimeout(5000)

    


    




})