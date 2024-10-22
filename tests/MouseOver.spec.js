const { test,expect } = require("playwright/test")
test('MouseOver',async ({page})=>{

    await page.goto('https://demo.opencart.com/en-gb/catalog/desktops')

    const desktops=await page.locator("//*[@class='nav-link dropdown-toggle' and contains(text(),'Desktops')]")
    const mac=await page.locator("//*[@class='nav-link' and contains(text(),'Mac (1)')]")

    await desktops.hover()
    await mac.hover()

    await page.waitForTimeout(5000)
})

