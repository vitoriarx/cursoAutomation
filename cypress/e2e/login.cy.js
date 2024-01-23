/// <reference types="cypress"/>

describe('Acessar a página de login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('https://curso-automacao-web-app.herokuapp.com/login')
        cy.get('#yourUsername').type("admin@automacao.org.br")
        cy.get('#yourPassword').type("password01")
        cy.get('#logginButton').click()
    });
});