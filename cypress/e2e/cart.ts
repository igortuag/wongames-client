/// <reference path="../support/index.d.ts" />


describe('Cart', () => {
  it('should add and remove items from cart', () => {
    cy.visit('/')

    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /Add to cart/i }).click()
    })

    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /Add to cart/i }).click()
    })

    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /Add to cart/i }).click()
    })


  })
})
