/// <reference types="Cypress" />

before(() => {
    cy.visit("/");
})

describe("add new hero to list of heroes", () => {
    it("go to heroes page", () => {
        cy.get('nav>a').eq(1).click()
    })
    it("add hero", () => {
        cy
            .get('input').type('Purple unicorn').then(($newHero) => {
                var newHeroName = $newHero.text()
                cy
                    .get('.add-hero').click()
                cy
                    .get('.heroes li')
                    .last()
                    .get('a')
                    .should('contain', newHeroName)
            })

    })


})