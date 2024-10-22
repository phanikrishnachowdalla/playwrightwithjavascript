import {test,expect} from '@playwright/test'

test('SignUp',async ({page})=>{ 

    await page.goto('https://www.demoblaze.com/')

    await page.click('id=signin2')

    await page.fill('id=sign-username','phani.krishna@dragonflytest.com')
    await page.fill('id=sign-password','Dragon@123')

    await page.click("//*[@onclick='register()']")

    await page.close();

})