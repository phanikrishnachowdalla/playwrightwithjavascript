const{test,expect}=require('@playwright/test')
test('Frames',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allFrames=await page.frames()
    console.log(allFrames.length)
    
    // for(const frame of allFrames )
    // {
    //     console.log(frame)
    // }

    //Approch 1 using name or URL
    //const frame1 = await page.frame('name')
    const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html.html'})
    await frame1.fill('name=mytext1','HoneyPhani')

    //Approach 2 using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator('name=mytext1')
    inputBox.fill('PhaniHoney')
})  