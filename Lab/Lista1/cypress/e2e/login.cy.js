describe('Testando página inicial', () => {
  it('Testar login Inválido - Cenário de erro', () => {
    cy.visit('http://localhost:3001/')
    cy.get(':nth-child(1) > .sc-uYFMi').type("emailErrado@email.com")
    cy.get(':nth-child(2) > .sc-uYFMi').type("senhaErrada")
    cy.get('.sc-iwXfZk').click()
    cy.contains('.Toastify__toast-body > :nth-child(2)', 'Erro ao realizar a operação!').should('be.visible');

  })

  it('Testar login Válido',()=>{
    cy.visit('http://localhost:3001/')
    cy.get(':nth-child(1) > .sc-uYFMi').type("matheus@email.com")
    cy.get(':nth-child(2) > .sc-uYFMi').type("ruralSenha")
    cy.get('.sc-iwXfZk').click()
    cy.contains('.Toastify__toast-body > :nth-child(2)','Operação realizada com sucesso!').should('be.visible');
  })
})