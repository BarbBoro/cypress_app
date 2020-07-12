/// <reference types="Cypress" />

before(() => {
    cy.visit("/");
})

describe("search hero on the front page", () => {
    it("search hero", () => {
        cy
            .get('#search-box')
            .type('Magneta')
            .get('.search-result')
            .find('a')
            .click()
    })
    it("check hero name and  id", () => {
        cy
            .get('.hero-name')
            .should('contain', 'MAGNETA')
        cy
            .get('.hero-id')
            .then(($heroId) => {
                var heroTxtId = $heroId.text().substr(4)
                cy
                    .url()
                    .should('include', heroTxtId)
            })
    })
})
