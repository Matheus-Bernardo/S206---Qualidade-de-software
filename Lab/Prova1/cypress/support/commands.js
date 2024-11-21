Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername').type(usuario)
    cy.get('#loginpassword').type(senha)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
});
