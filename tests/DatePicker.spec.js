const { test,expect } = require("playwright/test")
test('DatePicker',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.locator("//*[@id='datepicker']").fill('04/26/2001')
    //await page.fill("//*[@id='datepicker']",'02/04/2000')
    //await page.waitForTimeout(5000)
    //await page.locator("//*[@id='datepicker']").

    //datepicker loop
    const mydate="26"
    const month="April"
    const year="2025"

    await page.locator("//*[@id='datepicker']").click()

    while(true)
    {
        const currentYear = await page.locator("//*[@class='ui-datepicker-month']").textContent()
        const currentMonth = await page.locator("//*[@class='ui-datepicker-year']").textContent()

        if(currentMonth==year && currentMonth==month)
        {
            break
        }
        else

        await page.locator("//*[@class='ui-icon ui-icon-circle-triangle-e']").click()

        const dates = await page.$$("//*[@class='ui-state-default']")
        for(const date of dates)
        {
            if(date.textContent()==mydate)
            {
                await page.click(date)
                break;
            }
        }    

        await page.locator("//*[@class='ui-state-default' and contains(text(),'26')]").click();

        await page.waitForTimeout(5000)
    }


})