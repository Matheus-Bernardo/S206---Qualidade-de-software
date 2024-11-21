describe('Adicionar um item no carrinho',()=>{
    it('Item adicionado com sucesso',()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        
        // Verifica o item "CATEGORIES"
        cy.get('a#cat').should('be.visible');

        // Verifica o item "Phones"
        cy.get('a#itemc').contains('Phones').should('be.visible');

        // Verifica o item "Laptops"
        cy.get('a#itemc').contains('Laptops').should('be.visible');

        // Verifica o item "Monitors"
        cy.get('a#itemc').contains('Monitors').should('be.visible');
    })
})