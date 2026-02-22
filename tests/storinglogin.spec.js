const {test, expect} = require('@playwright/test');
let webContext;

test("Storing Login Session",async ({browser})=>{

    const Context = await browser.newContext();
    const page = await Context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("nsharm028@gmail.com")
    await page.locator("#userPassword").fill("Password1")
    await page.locator("#login").click()
    await page.waitForTimeout(2000)
    await Context.storageState({path:'state.json'})
    webContext=await browser.newContext({storageState:'state.json'})
    
});

test("storying 1", async()=>{

const page = await webContext.newPage()
await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
await page.waitForTimeout(2000)
});

