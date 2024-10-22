const{test,expect}=require('@playwright/test')
test('Frames',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.locator("//*[@name='mytext3']").fill('PentakotaChowdalla')

    const childFrames =await frame3.childFrames()
    
    await childFrames[0].locator("//*[@id='i5']//div[3]/div").check()
    await page.mainFrame();

    
})
