const{test,expect}= require('@playwright/test')

test("Auto suggest", async ({page})=>{

await page.goto("https://www.redbus.com")

await page.waitForTimeout(5000)





})