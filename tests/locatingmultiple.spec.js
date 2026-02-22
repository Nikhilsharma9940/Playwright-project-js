const { test, expect } = require('@playwright/test');

test('Home Page', async({page})=>{

    await page.goto("https://www.demoblaze.com/")
   
    const links = await page.$$('a')

    for(const link of links){

       const pagelinks =  await link.textContent();
       console.log(pagelinks)
    }
    //page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for (const product of products) {

        const pageProduct = await product.textContent();
        console.log(pageProduct)
    }
})