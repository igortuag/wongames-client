// load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to navigate to google.com
     * @example cy.google()
     */
    google(): Chainable<Window>
  }
}
