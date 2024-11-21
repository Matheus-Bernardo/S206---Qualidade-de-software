describe('Adicionar um item no carrinho',()=>{
    it('Item adicionado com sucesso',()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added');
          });
        
    })
})