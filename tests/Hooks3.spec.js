import {test,expect} from '@playwright/test';

test('Home page test',async ({page})=>{

    let page;

    test.beforeAll(async ({browser})=>{

    page = await browser.newPage()

    await page.goto('https://www.demoblaze.com/index.html')
    //login
    await page.locator('[id=login2]').click()
    await page.locator('[id=loginusername]').fill('phani.krishna@dragonflytest.com')
    await page.locator('[id=loginpassword]').fill('Dragon@123')
    await page.locator("//*[@class='btn btn-primary' and contains(text(),'Log in')]").click()
    })

    test.afterAll(async()=>{
    //logout    
    await page.click("//*[@id='logout2']")
    })


test('Home page test',async ()=>{    
    //Home page
    const products = await page.$$("//*[@id='tbodyid']//div//div//div")
    expect(products).toHaveLength(9)
})


test('Add product to cart',async ()=>{
    //Home page
    await page.locator("//*[@class='hrefch' and text()='Samsung galaxy s6']").click()
    //await page.waitForTimeout(3000)

    await page.locator("//*[text()='Add to cart']").click()
    await page.on('dialog',async dialog=>{
        expect (dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
})

})