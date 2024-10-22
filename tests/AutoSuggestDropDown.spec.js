const{test,expect}=require('@playwright/test')
test('Auto sugest dropdown',async ({page})=>{

    await page.goto('https://www.redbus.in/?gad_source=1&gclid=EAIaIQobChMImqads5iQiQMVVi6DAx1e8Qg4EAAYASAAEgKyuPD_BwE')
    await page.locator('id=src').fill('Vizag')

    await page.waitForSelector("//*[@class='sc-dnqmqq dZhbJF']")

    const options = await page.$$("//*[@class='sc-dnqmqq dZhbJF']")

    for(let opt of options)
    {
        const value = opt.textContent()
        //console.log(value)
        if(value.include('RTC Complex'))
        {
            await opt.click()
            break;
        }
    }

    await page.waitForTimeout(5000)


})