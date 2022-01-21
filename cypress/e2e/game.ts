/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/game//cyberpunk-2077')

    cy.getByDataCy('game-info').within(() => {
      cy,findByRole('heading', { name: 'Cyberpunk 2077' }).should('exist')
    })
  })
})
