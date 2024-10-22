const { test,expect } = require("playwright/test")
test('Mouse Double Click',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const but=await page.locator("//*[contains(text(),'Copy Text')]")
    await but.dblclick()

    const string=await page.locator("field2")
    await expect(string.textConten).toBe('Hello World!')

    await page.waitForTimeout()

})    