describe('cadastrando e realizando Login ', () => {
  it('Cadastrando e validando Login', () => {
    registrar()
    fazerLogin()
    deletarUser()
    fazerLogin()
    //assertiva de que não realiza login após deletar o usuário
    cy.contains('.ng-binding','Username or password is incorrect')
  })
})


function fazerLogin(){
  cy.contains('.container','Login').click()
    cy.get('#username').type("mhlb10")
    cy.get('#password').type("1234")
    cy.get('.btn-primary').click()
}

function registrar(){
  cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type("testando")
  cy.get('#Text1').type("Bernardo")
  cy.get('#username').type("mhlb10")
  cy.get('#password').type('1234')
  cy.get('.btn-primary').click()
  cy.contains('.ng-binding','Registration successful')

}

function deletarUser(){
  cy.get('.ng-binding > a').click()
  cy.get('.btn').click()
}

