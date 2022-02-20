/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it.skip('should fill the input and receive a success message', () => {

    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 200,
        body: { ok: true }
      })

      expect(res.body.email).to.eq('ci@wongames.com')
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()

    cy.findByText(/you just received an email/i).should('exist')
  });
})
