/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it.skip('should sing up', () => {
    const user = createUser()

    cy.visit('/sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  });

  it('should sing in and sign out', () => {
    cy.visit('/sign-in')

    cy.findByPlaceholderText(/email/i).type('e2e@wongames.com')
    cy.findByPlaceholderText(/^password/i).type('123456')
  });
})
