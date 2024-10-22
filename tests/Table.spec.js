const{test,expect}=require('@playwright/test')
test('Frames',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('id=productTable')

    // total no.of rows & columns
    const columns = await table.locator("//*[@id='productTable']//tr/th")
    console.log("Total columns are:",await columns.count())
    expect(columns.count()).toBe(4)

    //total no.of rows

    const rows = await table.locator("//*[@id='productTable']//tr")
    console.log("Total rows are:",await rows.count())
    expect(rows.count()).toBe(5)

    // Select check box for Product 4
    const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: 'Product 4'
    });
    await matchedRow.locator('input').check();

    // Select multiple products by reusable function
    await selectProduct(rows, page, 'Product 1');
    await selectProduct(rows, page, 'Product 3');
    await selectProduct(rows, page, 'Product 5');
 



})    