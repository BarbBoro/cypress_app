/// <reference types="Cypress" />

before(() => {
    cy.visit("/");
})

describe("remove last hero from the list of heroes", () => {
    it("go to heroes page", () => {
        cy.get('nav>a').eq(1).click()
    })

    it("remove last hero", () => {
        cy
            .get('.heroes li')
            .last().get('.delete').last().click()
    })

})