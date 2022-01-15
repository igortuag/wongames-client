// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string;
  highlight?: boolean;
}

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to navigate to google.com
     * @example cy.google()
     */
    google(): Chainable<Window>
    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>
    
    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
  }
}
