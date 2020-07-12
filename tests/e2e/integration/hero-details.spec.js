/// <reference types="Cypress" />

before(() => {
    cy.visit("/");
})

describe("check hero", () => {
    it("click on first hero", () => {
        cy
            .get('.hero').eq(0)
            .get('h4').eq(0).then(($heroName) => {
                var heroTxt = $heroName.text().toUpperCase()
                cy
                    .get('.col-1-4')
                    .eq(0)
                    .click()
                cy
                    .get('h2')
                    .should('contain', heroTxt)
            })
        cy
            .get('.hero-id')
            .then(($heroId) => {
                var heroTxtId = $heroId.text().substr(4)
                cy
                    .url()
                    .should('include', heroTxtId)
            })
        cy
            .get('button')
            .eq(0)
            .click()

    })

    it("click on second hero", () => {
        cy
            .get('.hero').eq(1)
            .get('h4').eq(1).then(($heroName) => {
                var heroTxt = $heroName.text().toUpperCase()
                cy
                    .get('.col-1-4')
                    .eq(1)
                    .click()
                cy
                    .get('h2')
                    .should('contain', heroTxt)
            })
        cy
            .get('.hero-id')
            .then(($heroId) => {
                var heroTxtId = $heroId.text().substr(4)
                cy
                    .url()
                    .should('include', heroTxtId)
            })
        cy
            .get('button')
            .eq(0)
            .click()

    })
    it("click on third hero", () => {
        cy
            .get('.hero').eq(2)
            .get('h4').eq(2).then(($heroName) => {
                var heroTxt = $heroName.text().toUpperCase()
                cy
                    .get('.col-1-4')
                    .eq(2)
                    .click()
                cy
                    .get('h2')
                    .should('contain', heroTxt)
            })
        cy
            .get('.hero-id')
            .then(($heroId) => {
                var heroTxtId = $heroId.text().substr(4)
                cy
                    .url()
                    .should('include', heroTxtId)
            })
        cy
            .get('button')
            .eq(0)
            .click()

    })

    it("click on last hero", () => {
        cy
            .get('.hero').eq(3)
            .get('h4').eq(3).then(($heroName) => {
                var heroTxt = $heroName.text().toUpperCase()
                cy
                    .get('.col-1-4')
                    .eq(3)
                    .click()
                cy
                    .get('h2')
                    .should('contain', heroTxt)
            })
        cy
            .get('.hero-id')
            .then(($heroId) => {
                var heroTxtId = $heroId.text().substr(4)
                cy
                    .url()
                    .should('include', heroTxtId)
            })
        cy
            .get('button')
            .eq(0)
            .click()

    })



})