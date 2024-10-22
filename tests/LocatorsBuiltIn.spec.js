import {test,expect} from '@playwright/test'
test('LocatorsBuiltIn',async ({page})=>{
    
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    const ph = page.getByPlaceholder('Username').fill('Admin')
    const pwd = page.getByPlaceholder('Password').fill('admin123')
    
    await page.getByRole('button',{type:'submit'}).click()

    

})