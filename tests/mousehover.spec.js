const { test, expect } = require('@playwright/test');

test('Mouse Hover', async({page})=>{

    await page.goto("https://www.guru99.com/")
    const Desktop = await page.getByText('Desktops', { exact: true })
    const Mac = await page.getByRole('link', { name: 'Mac (1)' })

    await Desktop.hover()
    await Mac.hover()

    await page.waitForTimeout(5000)
    
})