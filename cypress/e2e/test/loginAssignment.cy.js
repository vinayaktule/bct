describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get("#inputEmail").type("qa-assignment")
    cy.get("#inputPassword").type("qa-Bynder2023!")
    cy.get("[type='submit']").click()
  })
})