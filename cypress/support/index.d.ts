// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string;
  highlight?: boolean;
}

type FieldsAttributes = {
  label: string;
  name: string;
}

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to navigate to google.com
     * @example cy.google()
     */
    google(): Chainable<Window>
    /**
     * Custom command to get element by data-cy attribute.
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Element>
    /**
     * Custom command to get fields by label
     * @example cy.getFields([{label: 'foo', value: 'bar'}])
     */
    getFields(fields: FieldsAttributes[]): Chainable<Element>
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
