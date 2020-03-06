const loginpage = require('../pages/loginPage')
const productpage = require('../pages/productpage')
const checkoutpage = require('../pages/checkoutPage')
const datapage = require('../assets/data')


// ──────────────────────────────────────────────────────────────────────────── 1 ──────
//   ::::::  Login: :   :    :     :        :       :
// ──────────────────────────────────────────────────────────────────────────────────────

describe('SWAGLABS User Login', function(){

    it("User should not login to SWAGLABS with invalid username", () =>{
        browser.url('/')
        loginpage.enterinvalidusername(datapage.invaliduser_name)
        browser.pause(3000)
        loginpage.enterpassword(datapage.Pass)
        browser.pause(3000)
        loginpage.clickonloginbutton()
        browser.pause(5000)
        
    })

    it("User should not login to SWAGLABS with invalid Password", () =>{
        browser.url('/')
        loginpage.enteruserName(datapage.user_name)
        browser.pause(3000)
        loginpage.enterinvalidpassword(datapage.invalidPass)
        browser.pause(3000)
        loginpage.clickonloginbutton()
        browser.pause(5000)
        
    })

    it("User should login to SWAGLABS with valid user name and password", () =>{
        browser.url('/')
        loginpage.enteruserName(datapage.user_name)
        browser.pause(3000)
        loginpage.enterpassword(datapage.Pass)
        browser.pause(3000)
        loginpage.clickonloginbutton()
        browser.pause(5000)
        browser.deleteAllCookies()
    })

// ──────────────────────────────────────────────────────────────────────────── 2 ──────
//   ::::::  Product Purchase: :   :    :     :        :       :
// ──────────────────────────────────────────────────────────────────────────────────────

describe('User Product Purchase', function(){
    it("Varify that user can add product  on cart", () =>{
        browser.maximizeWindow()
        browser.pause(3000)
        productpage.clickOnAddtoCartButton('3')
        productpage.clickOnAddtoCartButton('5')
        browser.pause(3000)
        productpage.clickShoppingCartIcon()
        browser.pause(3000)
    })

    it("Varify that Continue Shopping working", () =>{
       productpage.clickContinueShoppingButton()
       browser.pause(3000)
    })

    it("Varify that Product details page working", () =>{
        productpage.clickProductDetails('4')
        browser.pause(3000)
        productpage.clickdetailspageAddtoCartButton()
        browser.pause(5000)
     })

     it("Varify that Product remove from cart", () =>{
         productpage.removeProductFromCart()
         browser.pause(5000)
     })

     it("Varify that CHECKOUT button is working", () =>{
        productpage.clickCheckOutButton()
        browser.pause(5000)
    })
})

// ──────────────────────────────────────────────────────────────────────────── 3 ──────
//   ::::::  CheckOut page Details: :   :    :     :        :       :
// ──────────────────────────────────────────────────────────────────────────────────────

describe('CheckOut Page details', function(){
    it("Varify that user information are working", ()=>{
        checkoutpage.entercheckoutInfoFirstName(datapage.chekout_firstName)
        checkoutpage.entercheckoutInfoLastName(datapage.chekout_lastName)
        checkoutpage.entercheckoutInfoPostal(datapage.chekout_Postal)
        browser.pause(2000)
        checkoutpage.clickOnCheckoutContinueButton()
        browser.pause(5000)
    })

    it("Varify to click on Overview page finish button", () =>{
        checkoutpage.clickOnOverviewFinishButton()
        browser.pause(5000)
    })

})

})