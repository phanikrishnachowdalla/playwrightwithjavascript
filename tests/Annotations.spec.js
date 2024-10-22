const{test,expect}=require ('@playwright/test')
const exp = require('constants')

//only
test.only('Tags1',async ({page})=>{
    console.log('test 1.....')
})

//skip
test.skip('Tags2',async ({page})=>{
    console.log('test 2.....')
})

//condition skip
test('Tags3',async ({page,browserName})=>{
    console.log('test 3.....')
    if(browserName==='chromium')
    {
        test.skip()
    }
})

//fixme
test('Tags4',async ({page})=>{
    test.fixme()
    console.log('test 4.....')
})

//Fail
test('Tags5',async ({page})=>{
    test.fail()
    console.log('test 5.....')
    expect(1).toBe(1);
})

//Conditional Fail
test('Tags6',async ({page,browserName})=>{
    if(browserName==='chromium')
    {
        test.fail()
    }
    //test.fail()
    console.log('test 6.....')
    //expect(1).toBe(1);
})

//slow
test('Test7',async ({page})=>{

    //test.slow() //(*3)
    test.setTimeout(5000)
    await page.goto('https://www.demoblaze.com/#')
    console.log('test 7...')


})