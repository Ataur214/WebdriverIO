class checkout{
    get checkoutPageHeader(){return $('')}
    get checkoutInfo_FirstName(){return $('.checkout_info #first-name')}
    get checkoutInfo_LastName(){return $('.checkout_info #last-name')}
    get checkoutInfo_Postal(){return $('.checkout_info #postal-code')}
    get checkoutContinueButton(){return $('.checkout_buttons .btn_primary')}
    get overviewFinishButton(){return $('.summary_info .cart_footer .btn_action')}

    entercheckoutInfoFirstName(text){
        this.checkoutInfo_FirstName.waitForDisplayed()
        this.checkoutInfo_FirstName.setValue(text)

    }

    entercheckoutInfoLastName(text){
        this.checkoutInfo_LastName.waitForDisplayed()
        this.checkoutInfo_LastName.setValue(text)
        
    }

    entercheckoutInfoPostal(text){
        this.checkoutInfo_Postal.waitForDisplayed()
        this.checkoutInfo_Postal.setValue(text)
        
    }

    clickOnCheckoutContinueButton(){
        this.checkoutContinueButton.waitForDisplayed()
        this.checkoutContinueButton.click()
    }

    clickOnOverviewFinishButton(){
        this.overviewFinishButton.waitForDisplayed()
        this.overviewFinishButton.click()
    }

}
module.exports = new checkout()