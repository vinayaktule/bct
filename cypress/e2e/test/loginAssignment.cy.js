import LoginPage from "../pageobject/LoginPage"
import DashaboardPage from "../pageobject/DashaboardPage"

describe('Login functionality for bynder application', () => {
  let userdata;
  beforeEach('Login to Application',()=>{
    cy.fixture('loginpage').then((creds)=>{
        userdata = creds
    });
    cy.visit('/')
  })

  it('1. Validate Login with valid credentials', () => {
    LoginPage.loginToApp(userdata.username, userdata.password)
    DashaboardPage.logout()
    cy.contains(userdata.validcredentials.logoutmsg).should('have.text',userdata.validcredentials.logoutmsg)
  })

  it('2. Verify Login with invalid credentials', () => {
    LoginPage.loginToApp(userdata.username, userdata.wrongpassword)
    cy.contains(userdata.invalidcredentials.invalidcredentialmsg).should('have.text',userdata.invalidcredentials.invalidcredentialmsg)
  })

})