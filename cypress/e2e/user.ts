/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should sing up', () => {
    const user = createUser()

    cy.visit('/sign-up')

    cy.findByPlaceholderText(/username/i).type('cypress')
    cy.findByPlaceholderText(/email/i).type('e2e@wongames.com')
    cy.findByPlaceholderText(/^password/i).type('123456')
    cy.findByPlaceholderText(/confirm password/i).type('123456')
    cy.findByRole('button', { name: /sign up now/i }).click()
  });
})
