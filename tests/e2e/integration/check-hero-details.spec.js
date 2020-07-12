/// <reference types="Cypress" />

before(() => {
    cy.visit("/");
})

describe("check hero", () => {
    it("click on first hero", () => {
        cy
            .get('.col-1-4').eq(0)
            .should('contain', 'Narco').click()
    })
    it("check hero detail content", () => {
        cy.get()
    })

})