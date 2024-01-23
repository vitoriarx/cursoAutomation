/// <reference types="cypress"/>

    let data; 

    before(() => {
        cy.fixture('example').then((tData) => {
            data = tData;
        })
    });

describe('Acessar a página de login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('https://curso-automacao-web-app.herokuapp.com/login')
        cy.get('#yourUsername').type(data.username)
        cy.get('#yourPassword').type(data.password)
        cy.get('#logginButton').click()
    });
});