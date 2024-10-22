const { test,expect } = require("playwright/test")
test('DragAndDrop',async ({page})=>{

    await page.goto('https://practice.expandtesting.com/upload')

    await page.locator('[id="fileInput"]')



})    
