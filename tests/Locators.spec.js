//const {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'
import exp from 'constants'
import { TIMEOUT } from 'dns'

test('Locators',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //page.locator('id=login2').click();
    await page.click('id=login2')

    //await page.locator('id=loginusername').fill('phani.krishna@dragonflytest.com')
    //await page.locator('id=loginpassword').fill('Dragon@123')

    //await page.type()
    await page.fill('id=loginusername','phani.krishna@dragonflytest.com')
    await page.fill('id=loginpassword','Dragon@123')

    await page.click("//*[@class='modal-footer']//button[contains(text(),'Log in')]")
    
    const LogoutButton = await page.locator('id=logout2')
    await expect(LogoutButton).toBeVisible()

    await page.close()
})