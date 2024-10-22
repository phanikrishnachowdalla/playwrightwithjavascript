const{test,expect}=require('@playwright/test')
import { Cartpage } from '../pages/Cartpage';
import { HomePage } from '../pages/Homepage';
import { LoginPage } from '../pages/Loginpage'

test('PomTest',async ({page})=>{

    //login
    const login =new LoginPage(page)
    await login.gotoLoginPage();
    await login.login('phani.krishna@dragonflytest.com','Dragon@123')
    await page.waitForTimeout(5000)
    
    //homepage
    const home = new HomePage()
    await home.addProductToCart("Nexus 6")
    await home.waitForTimeout(3000)
    await home.gotoCart()

    //cart
    const cart = new Cartpage();
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart("Nexus 6")
    expect(await status).toBe(true);

})