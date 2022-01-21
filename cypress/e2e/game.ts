/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/game//cyberpunk-2077')

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: 'Cyberpunk 2077' }).should('exist')
      cy.findByText(/Cyberpunk 2077 is an open world/i).should('exist')
      cy.findByText('$59.99').should('exist')
    })
  })
})
