const { test,expect } = require("playwright/test")
test('DragAndDrop',async ({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const source=await page.locator("//*[@id='box7']")
    const target=await page.locator("//*[@id='box107']")

    //Approach1
    // await source.hover()
    // await page.mouse.down()

    // await target.hover()
    // await page.mouse.up()

    //Approach2
    await source.dragTo(target)
    await page.waitForTimeout(5000)
})