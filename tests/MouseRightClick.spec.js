const { test,expect } = require("playwright/test")
test('MouseRightClick',async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const button = await page.locator("//span[contains(text(),'right click me')]")

    await button.click({button:'right'})

    await page.waitForTimeout(5000)
})    