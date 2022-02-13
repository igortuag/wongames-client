/// <reference path="../support/index.d.ts" />

describe('User', () => {
  before(() => {
    cy.visit('/sign-up')
  })

  it('should sing up', () => {
    cy.findByPlaceholderText(/username/i).type('cypress')
    cy.findByPlaceholderText(/email/i).type('e2e@wongames.com')
    cy.findByPlaceholderText(/^password/i).type('123456')
    cy.findByPlaceholderText(/confirm password/i).type('123456')
  });
})
