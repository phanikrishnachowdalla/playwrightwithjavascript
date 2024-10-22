const{test,expect}=require('@playwright/test')
const exp = require('constants')
test('Assertions',async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //Hard assertions
    // await expect(page).toHaveTitle('STORE')
    // await expect(page).toHaveURL('https://www.demoblaze.com/')
    // await expect(page.locator('id=nava')).toBeVisible()

    //Soft assertions
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await expect.soft(page.locator('id=nava')).toBeVisible()

})