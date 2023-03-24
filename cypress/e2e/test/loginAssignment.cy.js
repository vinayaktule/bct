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
    cy.login(userdata.validcredentials.username, userdata.validcredentials.password)
    DashaboardPage.logout()
    cy.contains(userdata.validcredentials.logoutmsg).should('have.text',userdata.validcredentials.logoutmsg)
  })

  it('2. Verify Login with invalid credentials', () => {
    LoginPage.loginToApp(userdata.invalidcredentials.username, userdata.invalidcredentials.password)
    cy.contains(userdata.invalidcredentials.invalidcredentialmsg).should('have.text',userdata.invalidcredentials.invalidcredentialmsg)
  })

})