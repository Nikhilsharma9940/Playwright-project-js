const{test,expect}= require('@playwright/test')

test("Double Click", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const copyText = await page.getByRole('button', { name: 'Copy Text' });

    await copyText.dblclick()

    const field2 = await page.locator('#field2')

    await expect(field2).toHaveValue("Hello World!");




})