import {test, expect} from '@playwright/test';

test('on24test', async({page}) => {


    await page.goto("https://wccqa.on24.com/webcast/login");
    await page.waitForSelector("#username")
    await page.fill('#username','ESREQA');
    await page.locator('#password').fill('Password015')
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByTestId('Events_createEventButton').click()
    
   


})