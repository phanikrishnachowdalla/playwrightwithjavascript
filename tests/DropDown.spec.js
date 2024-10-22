const {test,expect } = require("playwright/test")

test('Dropdown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.locator('id=country').selectOption({value:'india'})
    //await page.locator('id=country').selectOption({India})
    await page.locator('id=country').selectOption({label:'India'})
    //await page.locator('id=country').selectOption({index:1})
    //await page.selectOption("id=country",'India')
    await page.waitForTimeout(5000)
})