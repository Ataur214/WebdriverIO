class loginToSWAGLABS{

get userName(){return $('#user-name')}
get password(){return $('#password')}
get login_btn(){return $('.btn_action')}
get invaliduserName(){return $('#user-name')}
get invalidpassword(){return $('#password')}


// ──────────────────────────────────────────────────────────────────────────── 1 ──────
//   ::::::  Login: with valid user name and password:  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
enteruserName(text){
    this.userName.waitForDisplayed()
    this.userName.setValue(text)
    
}

enterpassword(text){
    this.password.waitForDisplayed()
    this.password.setValue(text)
}

clickonloginbutton(){
    this.login_btn.waitForDisplayed()
    this.login_btn.click()
}

// ──────────────────────────────────────────────────────────────────────────── 1 ──────
//   ::::::  Login: with Invalid user name and password:  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
enterinvalidusername(text){
    this.invaliduserName.waitForDisplayed()
    this.invaliduserName.setValue(text)
}

enterinvalidpassword(text){
    this.invalidpassword.waitForDisplayed()
    this.invalidpassword.setValue(text)
}

}

module.exports = new loginToSWAGLABS()
