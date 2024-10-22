const exp = require("constants")
const { test,expect } = require("playwright/test")
test('DragAndDrop',async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare#diff')
    //1.type text
    await page.locator("//*[@name='text1']").fill('Hi! Honey I love you')
    //await page.type("//*[@name='text1']",'Hi! Honey I love you')
    
    //2.ctrl+A
    await page.keyboard.press('Control+A')
    //3.ctrl+s
    await page.keyboard.press('Control+S')
    //4.tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    //5.ctrl+v
    await page.keyboard.press('Control+V')
    //press button
    await page.locator("//*[@id='recaptcha']").click()

    const text = await expect(page.locator("//*[@class='alert alert-info']"))
    await expect(text.toHaveText('Hi! Honey I love you'))

    await page.waitForTimeout(5000)

})    