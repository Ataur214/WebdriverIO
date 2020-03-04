const loginpage = require('../pages/loginPage')
const productpage = require('../pages/productpage')
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

// ──────────────────────────────────────────────────────────────────────────── 1 ──────
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
})

})