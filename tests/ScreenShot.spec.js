import {test,expect} from '@playwright/test';

test('Page screenshot',async ({page}) => {
    await page.goto('https://www.demoblaze.com/#')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homapage.png'})
})

test('Full Page screenshot',async ({page}) => {
    await page.goto('https://www.demoblaze.com/#')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullHomapage.png',fullPage:true})
})

test.only('Element screenshot',async ({page}) => {
    await page.goto('https://www.demoblaze.com/#')
    await page.locator("//*[@class='col-lg-9']").screenshot({path:'tests/screenshot/'+Date.now()+'element.png'})

})