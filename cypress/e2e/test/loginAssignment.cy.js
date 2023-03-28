import LoginPage from "../pageobject/LoginPage"
import DashaboardPage from "../pageobject/DashaboardPage"

let userdata;
describe('Login functionality for bynder application', () => {
  beforeEach('Login to Application',()=>{
    cy.fixture('loginpage.json').then((creds)=>{
        userdata = creds
    });
    cy.visit('/')
  })

  it('1. Validate Login with valid credentials', () => {
    cy.login(userdata.validcredentials.username, userdata.validcredentials.password)
    DashaboardPage.logout()
    cy.verifytext(userdata.logoutmsg)
  })

  it.only('2. Verify Login with invalid credentials', () => {
    LoginPage.loginToApp(userdata.invalidcredentials.username, userdata.invalidcredentials.password)
    cy.verifytext(userdata.invalidcredentialmsg)
  })

})