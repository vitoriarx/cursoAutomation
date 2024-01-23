/// <reference types="Cypress" />

describe('Deve realizar login', () => {
    it('Realizar login atraves da api da aplicaçao', () => {
        cy.request({
            method:'POST',
            url: 'https://curso-automacao-user-service.herokuapp.com/auth',
            headers:{
                "Content-type" : "application/json"
            },

            body: {
                username:"admin@automacao.org.br",
                password: "password01"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });
});