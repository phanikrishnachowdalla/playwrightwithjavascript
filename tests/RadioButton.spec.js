const { test,expect } = require("playwright/test")
test('RadioButton',async ({page})=>{

    await page.goto('https://practice.expandtesting.com/radio-buttons')
    await page.locator('id=red').check()
    //await page.check('id=green')

    await expect(await page.locator('id=red')).toBeChecked()
    await expect(await page.locator('id=red').isChecked()).toBeTruthy()

    await expect(await page.locator('id=basketball').isChecked()).toBeFalsy()
 
    await page.waitForTimeout(5000)


})  