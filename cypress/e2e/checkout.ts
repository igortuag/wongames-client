/// <reference path="../support/index.d.ts" />

import { createUser, User } from '../support/generate'

describe('Checkout', () => {
  let user: User
  describe('Free Games', () => {
    beforeEach(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findByText(/free/i).click()
      cy.url().should('contain', 'price_lte=0')

      cy.addToCartByIndex(0)

      cy.findAllByLabelText(/cart item/i)
        .first()
        .should('have.text', 1)
        .click()

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy ut now/i).click()
      })

      cy.findByText(/only free games, click buy and enjoy!/i).should('exist')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', { name: /your purchase was successful!/i }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')

      cy.url().should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`)

      cy.signIn(user.email, user.password)
      cy.url().should('eq', `${Cypress.config().baseUrl}/profile/orders`)

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })

  describe('Paid Games', () => {
    beforeEach(() => {
      user = createUser()
    })

    it('should buy paid games', () => {
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findByText(/highest to lowest/i).click()
      cy.url().should('contain', 'sort=price%3Adesc')

      cy.addToCartByIndex(0)

      cy.findAllByLabelText(/cart item/i)
        .first()
        .should('have.text', 1)
        .click()
  })
})
