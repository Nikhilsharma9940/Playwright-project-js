import {test, expect} from '@playwright/test';

test('Single File', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#singleFileInput").setInputFiles('tests/UploadFiles/Resume.pdf')

await page.waitForTimeout(5000)

await page.locator("#country").selectOption({index:1});
await page.locator('#country').selectOption({ label: 'India' });

    
   


})