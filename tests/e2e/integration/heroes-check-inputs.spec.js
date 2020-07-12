/// <reference types="Cypress" />

describe("home page heroes", () => {
    it("should visit the homepage", () => {
        cy
            .visit("/");
    });
    it("click on first hero", () => {
        cy
            .get('.col-1-4').eq(0)
            .should('contain', 'Narco').click(),
            cy
                .get('input')
                .should('have.attr', 'ng-reflect-model', 'Narco')
        cy
            .get('button')
            .eq(0)
            .should('contain', 'go back')
            .click()
    })

    it("click on second hero", () => {
        cy
            .get('.col-1-4').eq(1)
            .should('contain', 'Bombasto').click(),
            cy
                .get('input')
                .should('have.attr', 'ng-reflect-model', 'Bombasto')
        cy
            .get('button')
            .eq(0)
            .should('contain', 'go back')
            .click()
    })
    it("click on third hero", () => {
        cy
            .get('.col-1-4').eq(2)
            .should('contain', 'Celeritas').click(),
            cy
                .get('input')
                .should('have.attr', 'ng-reflect-model', 'Celeritas')
        cy
            .get('button')
            .eq(0)
            .should('contain', 'go back')
            .click()
    })
    it("click on last hero", () => {
        cy
            .get('.col-1-4').eq(3)
            .should('contain', 'Magneta').click(),
            cy
                .get('input')
                .should('have.attr', 'ng-reflect-model', 'Magneta')
        cy
            .get('button')
            .eq(0)
            .should('contain', 'go back')
            .click()
    })

});
