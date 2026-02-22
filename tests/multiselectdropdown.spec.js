const { test, expect } = require('@playwright/test');

test('Multi Select Drop Downl', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.selectOption('#colors',['Blue','Red','Green','Yellow'])

    await page.waitForTimeout(5000)

    // Check the number of options in a drop down

   const options =  await page.locator("#colors option")
   //await console.log(options.length)

   await expect(options).toHaveCount(7)


   const options2 = await page.$$("#colors option")
   await expect(options2.length).toBe(7)

  const content = await page.locator("#colors").textContent()

await expect(content.includes("dsjfh")).toBeFalsy()
    

})