const{test,expect}=require('@playwright/test')
test('MultiSelectDropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption('id=colors',['Blue','Red','Yellow'])
    
    //Assertions
    //1.check no of options in dropdown
    //const options = await page.locator("//*[@id='colors']//option")
    //await expect(options).toHaveCount()

    //2.check number of options in dropdown using JS array
    //const options = await page.$$("//*[@id='colors']//option")
    //console.log("Number of options:",options.length)
    //await expect(options.length).toBe(7)

    //3.check presence of value in the dropdown
    const content = await page.locator('id=colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()

    
    await page.waitForTimeout(5000)
})