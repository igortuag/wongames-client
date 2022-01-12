/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', {name: /cyberpunk 2077/i})
      cy.findByRole('link', { name: /by now/i })
      
      cy.get('.slick-dots > :nth-child(2) > button').click()
    })
  })
})