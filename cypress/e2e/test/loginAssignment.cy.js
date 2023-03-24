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

  it('Validate Login with valid credentials', () => {
    LoginPage.loginToApp(userdata.username, userdata.password)
    DashaboardPage.logout()
    cy.contains(userdata.logoutmsg).should('have.text','You have successfully logged out.')
  })

  it.only('2. Verify Login with invalid credentials', () => {
    LoginPage.loginToApp(userdata.username, userdata.wrongpassword)
    cy.contains(userdata.invalidcredentialmsg).should('contain', 'You have entered an incorrect username or password.')
  })

})