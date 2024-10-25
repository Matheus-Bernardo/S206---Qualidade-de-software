describe('Validar opções disponiveis no menu',()=>{
    it('Verificando opção Home',()=>{
        cy.login("matheus@email.com","ruralSenha");
        // abrindo o menu lateral e verificando opção home
        cy.get('.sc-jwIPbr').click();
        cy.contains('[href="/home"]','Home').should('be.visible');
    })

    it('Verificando opção Controle Financeiro',()=>{
        cy.login("matheus@email.com","ruralSenha");
        // abrindo o menu lateral e verificando opção home
        cy.get('.sc-jwIPbr').click();
        cy.contains('[href="/finances"]','Controle Financeiro').should('be.visible');
    })
    it('Verificando opção Controle de Serviços',()=>{
        cy.login("matheus@email.com","ruralSenha");
        // abrindo o menu lateral e verificando opção home
        cy.get('.sc-jwIPbr').click();
        cy.contains('[href="/services"]','Controle de Serviços').should('be.visible');
    })
    it('Verificando opção de Gerenciamento de Funcionários',()=>{
        cy.login("matheus@email.com","ruralSenha");
        // abrindo o menu lateral e verificando opção home
        cy.get('.sc-jwIPbr').click();
        cy.contains('[href="/employees"]','Gerenciamento de Funcionários').should('be.visible');
    })
    it('Verificando opção de Suporte',()=>{
        cy.login("matheus@email.com","ruralSenha");
        // abrindo o menu lateral e verificando opção home
        cy.get('.sc-jwIPbr').click();
        cy.contains('[href="/suporte"]','Suporte').should('be.visible');
    })
})
