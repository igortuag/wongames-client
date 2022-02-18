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

    cy.signIn()

    cy.findByText('cypress').should('exist').click()
    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText('cypress').should('not.exist')
  });

  it('shoulod sign the user and redirect to the page that it was defined previously', () =>{
    cy.visit('/profile/me')
  })
})
