import {test, expect} from '@playwright/test';

test('printlinks', async({page}) => {


    await page.goto("https://www.guru99.com/");
    const links =  await page.$$("a")

    for(const link of links)
    {
        const pagelink = await link.textContent()
        console.log(pagelink)
    }
    
   


})