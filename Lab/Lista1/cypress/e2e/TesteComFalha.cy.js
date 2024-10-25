describe('Testando cenário para ocasionar erro',()=>{
    it('Pesquisando elemento inexistente',()=>{
        //fazendo login
        cy.visit('http://localhost:3001/')
        cy.get(':nth-child(1) > .sc-uYFMi').type("matheus@email.com")
        cy.get(':nth-child(2) > .sc-uYFMi').type("ruralSenha")
        cy.get('.sc-iwXfZk').click();

        // abrindo o menu lateral e clicando em suporte
        //cy.get('.sc-jwIPbr').click();
        //cy.wait(1000)
        cy.get('a.sc-eOzmre[href="/suporte"]').click();


        //assertiva para dar erro(procurando um h1 com o texto suporte)
        cy.contains('h1', 'Suporte técnico').should('be.visible');
    })
})