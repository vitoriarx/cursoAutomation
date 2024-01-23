/// <reference types="Cypress" />

describe('Deve realizar login', () => {
    let data; 

    before(() => {
        cy.fixture('example').then((tData) => {
            data = tData;
            cy.log(data.username)
            cy.log(data.password)
        })
    });

    it('Realizar login atraves da api da aplicaçao', () => {
        cy.request({
            method:'POST',
            url: 'https://curso-automacao-user-service.herokuapp.com/auth',
            headers:{
                "Content-type" : "application/json"
            },

            body: {
                username: data.username,
                password: data.password
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });
});