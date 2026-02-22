const{test,expect} = require('@playwright/test')

test("Date picker", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

     const Year = "2026";
     const month = "March";
     const Day = "18";

     await page.click("#datepicker");

     while(true){

        const currentYear= await page.locator(".ui-datepicker-year").textContent()
        const currentMonth =await page.locator(".ui-datepicker-month").textContent()

        if(currentYear == Year && currentMonth == month)
        {
            break;
        }

        await page.click("a[title='Next']");

       

        const AllDates = await page.$$("//a[@class='.ui-state-default']")

        for(const date of AllDates)
        {
            if(Day==date.textContent()){
                await date.click();
            }
        }
         await page.waitForTimeout(4000);
         const DateSelected = await page.locator("#datepicker").textContent()
         console.log(DateSelected);
         
     }

     






});