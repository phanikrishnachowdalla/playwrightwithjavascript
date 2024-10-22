const{test,expect}=require('@playwright/test')
test.skip('Alerts',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Dialog window handler
    //Enabling alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

        //const text = await dialog.
        //console.log(text)
    })

    await page.locator('id=alertBtn').click()
    await page.click('id=alertBtn');

    await page.waitForTimeout(5000)
})

    test.skip('confirmation dialog-Alert with OK and cancel',async ({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        page.on('dialog', async dialog=>{

            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Press a button!')
            await dialog.accept()  //close by OK button
            //await dialog.dismiss() //close by cancel button

        })

        await page.click('id=confirmBtn')
        await expect(page.locator('id=demo')).toHaveText('You pressed OK!')
    })


    test('Prompt Dialof',async ({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        page.on('dialog', async dialog=>{

            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name:')
            const text = await dialog.defaultValue()
            console.log(text)

            expect(dialog.defaultValue()).toContain('Harry Potter')
            await dialog.accept('Honey')  //close by OK button
            //await dialog.dismiss() //close by cancel button

        })

        await page.click('id=promptBtn')
        await expect(page.locator('id=demo')).toHaveText('Hello Harry Potter! How are you today? pressed OK!')
    })

