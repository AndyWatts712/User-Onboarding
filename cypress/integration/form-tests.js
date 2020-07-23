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

    })

})