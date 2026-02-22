const{test,expect}= require('@playwright/test')

test("Built_in_locators", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");


    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    await expect.soft(page).toHaveTitle("nopCommerce demo store. Register");

    const logo = await page.getByAltText("nopCommerce demo store")

    await expect(logo).toBeVisible();

    const searchBar = await page.locator("#small-searchterms")

    await expect(searchBar).toBeEnabled()


    const Radiobutton1 = await page.locator("#gender-male")
    await Radiobutton1.click()
    await expect(Radiobutton1).toBeChecked();


    const registerButton = await page.locator("#register-button")
    await expect(registerButton).toHaveAttribute('type','submit')


    const verifyText = await page.locator(".page-title h1")
    await expect(verifyText).toHaveText("Register");
    await expect(verifyText).toContainText("Reg")


    const emailInput = await page.locator("#Email")
    await emailInput.fill("qa2038@inbfw.com")
    await expect(emailInput).toHaveValue("qa2038@inbfw.com")

    const countDay = await page.locator("select[name='DateOfBirthDay'] option")
    await expect.soft(countDay).toHaveCount(32)






})
