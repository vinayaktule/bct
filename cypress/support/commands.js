Cypress.Commands.add('login', (username, password) => {

    cy.get("#inputEmail").type(username)
    cy.get("#inputPassword").type(password)
    cy.get(":submit").first().click()
})

Cypress.Commands.add('verifytext', (expected_msg) => {
    cy.get('.cbox_messagebox')
    .invoke('text')
    .should('equal',expected_msg)
})