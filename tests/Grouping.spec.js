import {test,expect} from '@playwright/test';

test.beforeAll(async () => {
    console.log('this is beforeAll Hook......');
});

test.afterAll(async () => {
    console.log('this is afterAll Hook......');
});

test.beforeEach(async () => {
    console.log('this is beforeEach Hook......');
});

test.afterEach(async () => {
    console.log('this is afterEach Hook......');
});



test.describe('Group 2',()=>{

    test('test1',async ({page})=>{

        console.log('this is test1...')
    
    })
    
    test('test2',async ({page})=>{
    
        console.log('this is test2...')
        
    })

})

test.describe('Group 1',()=>{

    test('test3',async ({page})=>{

        console.log('this is test3...')
        
    })
    
    test('test4',async ({page})=>{
    
        console.log('this is test4...')
        
    })

})
