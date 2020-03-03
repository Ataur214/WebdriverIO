const loginpage = require('../pages/loginPage')
const datapage = require('../assets/data')

describe('SWAGLABS User Login', function(){
    it("User should login to SWAGLABS", () =>{
        browser.url('/')
        loginpage.enteruserName(datapage.user_name)
        browser.pause(3000)
        loginpage.enterpassword(datapage.Pass) 
        browser.pause(3000)
        loginpage.clickonloginbutton()
        browser.pause(5000)
    })
})