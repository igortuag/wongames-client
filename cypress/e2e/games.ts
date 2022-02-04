/// <reference path="../support/index.d.ts" />

describe('Explore page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
  })
})
