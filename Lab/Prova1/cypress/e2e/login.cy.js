describe('Validação de Login', () => {
  it('Login com falha', () => {
    cy.login("invalid","invalid")
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Wrong password.');
      cy.get('a#logout2').should('not.be.visible');
    });
    
  })

  it('Login com sucesso',()=>{
    cy.login('teste',"teste")
    
  })

})

