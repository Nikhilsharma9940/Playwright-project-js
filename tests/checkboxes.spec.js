import { test, expect } from '@playwright/test';

test('checkboxes', async ({ page }) => {
  
   await page.goto("https://testautomationpractice.blogspot.com/")
   //await page.locator("//input[@id='sunday']").check()
   //expect(await page.locator("//input[@id='sunday']")).toBeChecked()
   
   //expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy()

   const checkboxLocator = ["//input[@id='sunday']", "//input[@id='wednesday']", "//input[@id='friday']"]; //Select multiple checkboxes

   for(const locator of checkboxLocator){

      await page.locator(locator).check();
   }

   await page.waitForTimeout(5000)

   for(const locator of checkboxLocator){

      if(await page.locator(locator).isChecked())
     {
   await page.locator(locator).uncheck();
       }
      
   }


   await page.waitForTimeout(5000)
});