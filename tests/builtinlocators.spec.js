const{test,expect}= require('@playwright/test')

test("Built_in_locators", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const altText = await page.getByAltText("company-branding")
    await expect(altText).toBeVisible();

    //Get by placeholder
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")

    //Get by role
    await page.getByRole("button",{type: 'Submit'}).click();



})

