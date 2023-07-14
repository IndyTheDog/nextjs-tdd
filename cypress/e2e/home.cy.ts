// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000')

    cy.get('header').get('img[id="hero-logo"]').should('be.visible')
    cy.get('header').get('span[id="page-title"]').should('exist')
    cy.get('header').get('span[id="page-subtitle"]').should('exist')
    cy.get('header').get('span[id="page-description"]').should('exist')
    cy.get('footer').should('exist')

  })
})

// Prevent TypeScript from reading file as legacy script
export {}
