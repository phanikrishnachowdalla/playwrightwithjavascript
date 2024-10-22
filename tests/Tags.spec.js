const{test,expect}=require ('@playwright/test')

test('Tags1@sanity',async ({page})=>{
    console.log('test 1.....')
})

test('Tags2@smoke',async ({page})=>{
    console.log('test 2.....')
})

test('Tags3@sanity@smoke',async ({page})=>{
    console.log('test 3.....')
})

test('Tags4@regression',async ({page})=>{
    console.log('test 4.....')
})

test('Tags5@sanity@regression',async ({page})=>{
    console.log('test 5.....')
})