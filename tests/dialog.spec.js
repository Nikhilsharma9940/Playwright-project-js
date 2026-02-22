const{test,expect} = require('@playwright/test')

test("Dialog", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#alertBtn").click()

    page.on('dialog', async dialog =>{
       await dialog.accept()

    })

});

test("Dialog_accept", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#confirmBtn").click()

    page.on('dialog', async dialog => dialog.accept())



});

test("Dialog_dismiss", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#confirmBtn").click()

    page.on('dialog', async dialog => dialog.dismiss())



});