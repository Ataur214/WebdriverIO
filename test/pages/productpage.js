class product{
    addToCartButton(index){return $(`.inventory_list .inventory_item:nth-child(${(index)}) .pricebar .btn_primary`)}
    get shoppingCartIcon(){return $('#shopping_cart_container a')}
    get continueShoppingButton(){return $('.cart_footer .btn_secondary')}
    productDetails(index){return $(`.inventory_list .inventory_item:nth-child(${(index)}) .inventory_item_img`)}
    get detailspageAddtoCartButton(){return $('#inventory_item_container .inventory_details .btn_primary')}
    get cartPageRemoveButton(){return $('.cart_list .cart_item .item_pricebar .btn_secondary')}
    get checkOutButton(){return $('.cart_footer .btn_action')}

    clickOnAddtoCartButton(index){
        this.addToCartButton(index).waitForDisplayed()
        this.addToCartButton(index).click()
    }

    clickShoppingCartIcon(){
        this.shoppingCartIcon.waitForDisplayed()
        this.shoppingCartIcon.click()
    }

    clickContinueShoppingButton(){
        this.continueShoppingButton.waitForDisplayed()
        browser.pause(2000)
        this.continueShoppingButton.click()
    }

    clickProductDetails(index){
        this.productDetails(index).waitForDisplayed()
        this.productDetails(index).click()
    }

    clickdetailspageAddtoCartButton(){
        this.detailspageAddtoCartButton.waitForDisplayed()
        this.detailspageAddtoCartButton.click()
        this.clickShoppingCartIcon()
    }

    removeProductFromCart(){
        this.cartPageRemoveButton.waitForDisplayed()
        this.cartPageRemoveButton.click()
    }

    clickCheckOutButton(){
        this.checkOutButton.waitForDisplayed()
        this.checkOutButton.click()
    }
}

module.exports = new product()