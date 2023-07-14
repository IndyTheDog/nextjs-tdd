import Home from './page'

/**
 * - I can click the button
 * - When I click the button a message is displayed
 */

describe('<Home />', () => {
  it('should render and display the button', () => {
    cy.mount(<Home />)

    cy.get('button').should('be.visible')
  })

  it('When I click the button a message is displayed', () => {
    cy.mount(<Home />)
    cy.get('div[data-id="exec-response"]').should('not.be.visible')
    cy.get('button')
      .click()
      .then(() => {
        cy.get('div[data-id="exec-response"]').should('be.visible')
      })
  })
})

export {}
