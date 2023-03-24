import LoginPage from "../pageobject/LoginPage"

describe('Login functionality for bynder application', () => {
  it('Validate Login with valid credentials', () => {
    cy.visit('/')
    LoginPage.loginToApp("qa-assignment","qa-Bynder2023!")
    cy.url().should('include','dashboard')
    cy.get('.admin-dropdown.profile').click()
    cy.contains('Logout').click()
    cy.contains('You have successfully logged out.').should('have.text','You have successfully logged out.')
  })
})