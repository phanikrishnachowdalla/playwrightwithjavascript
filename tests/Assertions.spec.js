const {test,expect}=require('@playwright/test');
test('Assertions',async ({page})=> {

    await page.goto('https://www.nopcommerce.com/en/register?returnUrl=%2Fen%2Fget-started')

    await expect(page).toHaveURL('https://www.nopcommerce.com/en/register?returnUrl=%2Fen%2Fget-started')

    await expect(page).toHaveTitle('Register - nopCommerce')

    const logoEle = await page.locator("//*[@title='nopCommerce']")
    await expect(logoEle).toBeVisible()

    await expect(page.locator('id=FirstName')).toBeEnabled()
    await expect(page.locator('id=LastName')).toBeDisabled()

    const regButton = await page.locator('id=register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    await expect(await page.locator('class=page-title')).toHaveText('Register')

    await expect(await page.locator('class=page-title')).toContainText('Regi')

    await expect(await page.locator('id=Email')).toHaveValue('jsdhjjd')

    const countryDropDownOptions = await page.locator("//*[@name='CountryId']//option")
    expect(countryDropDownOptions).toHaveCount('238') 

})
