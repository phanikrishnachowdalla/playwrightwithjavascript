import {test,expect} from '@playwright/test'
import { off } from 'process'
test('LocatingMultipleElements',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.waitForSelector("//*[@id='tbodyid']//div//div//div//h4")

    const elements = await page.$$("//*[@id='tbodyid']//div//div//div//h4")
    for(const element of elements)
    {
        const text = await element.textContent()
        console.log(text)
    }

    await page.close()

})