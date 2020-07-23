/// <reference types="cypress" />
describe('test field inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('can enter data into input fields', () => {
        cy.get('input[name="first_name"]').type('Andy')
        .should('have.value', 'Andy')
        cy.get('input[name="last_name"]').type('Watts')
        .should('have.value', 'Watts')
        cy.get('input[name="email"]').type('andy@andy.com')
        .should('have.value', 'andy@andy.com')

        cy.get('#termsCheck').check()
        
    })

    it('can submit data', () => {
        cy.get('button').click()
    })

    it('will not submit with blank email', () => {
        cy.get(':nth-child(3) > input').type(' ')
        cy.get('button').should('be.disabled')

    })

})