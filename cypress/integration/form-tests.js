describe('test field inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

})