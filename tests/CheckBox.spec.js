const {test,expect}=require('@playwright/test')
test('checkbox',async ({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/check-box.php')
    //await page.waitForEvent(page)

    //single checkbox
     await page.locator("//*[@id='bs_1']//span[@class='plus minus']").click();

    // await page.locator("//*[@id='bs_1']//input[@id='c_bf_1']").check()

    // await expect(page.locator("//*[@id='bs_1']//input[@id='c_bf_1']")).toBeChecked()
    // await expect(page.locator("//*[@id='bs_1']//input[@id='c_bf_1']").isChecked()).toBeTruthy()
    // await expect(page.locator("//*[@id='bf_2']//input[@id='c_bf_2']").isChecked()).toBeFalsy()

    //Multiple checkboxes
    const checkboxLocators = ["//*[@id='bs_1']//input[@id='c_bf_1']",
                                "//*[@id='bf_2']//input[@id='c_bf_2']",
                                "id=c_bs_2"];
    for(const loc of checkboxLocators)
        {
            await page.locator(loc).check();
        }                            
    
    for(const loc of checkboxLocators)
        {
            if(await page.locator(loc).isChecked())
            {
            await page.locator(loc).uncheck();
            }
        }



})