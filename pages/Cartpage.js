exports.Cartpage = class Cartpage{

    constructor(page){
        this.page=page;
        this.noOfproducts='//tbody[@id="tbodyid"]/tr/td[2]'
    }

    async checkProductInCart(productName){
        const productsInCart= await this.page.$$(this.noOfproducts)
        for(const product of productsInCart)
        {
            console.log(await product.textContent())
            if(productName === await product.textContent()){
                return true;
                break;
            }
        }
    }


}

