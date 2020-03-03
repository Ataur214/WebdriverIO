class loginToSWAGLABS{

get userName(){return $('#user-name')}
get password(){return $('#password')}
get login_btn(){return $('.btn_action')}

// ──────────────────────────────────────────────────────────────────────────── 1 ──────
//   ::::::  Login: :  :   :    :     :        :          :
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

}

module.exports = new loginToSWAGLABS()
