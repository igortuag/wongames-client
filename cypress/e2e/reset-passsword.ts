/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should fill the input and receive a success message', () => {
    cy.visit('/reset-password?code=123456789')

    cy.findAllByPlaceholderText(/^password/i).type('12345678')
    cy.findAllByPlaceholderText(/confirm password/i).type('321')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  });
})
