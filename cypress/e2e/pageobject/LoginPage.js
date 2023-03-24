import loginPageOR from '../objectrepo/LoginPage.json'

class LoginPage{
    loginToApp(username, password){
        cy.get(loginPageOR.usernameTxt).type(username)
        cy.get(loginPageOR.passwordTxt).type(password)
        cy.get(loginPageOR.loginBtn).first().click()
    }

    logoutStatus(){
        return cy.get(loginPageOR.notificationPopup).invoke('text')
    }
}
export default new LoginPage()