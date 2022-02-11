/// <reference path="../support/index.d.ts" />

import { priceFields, platformFields, genresFields, sortFields } from '../../src/utils/filter/fields';

describe('Explore page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(sortFields)
    cy.getFields(genresFields)
  })

  it('should show 15 games and show more games when show more is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30)
  })

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i).click()

    cy.location('href').should('contain', 'sort-price%3Aasc')

    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText("$0.00").should('exist')
    })

    cy.findByText(/highest to lowest/i).click()

    cy.location('href').should('contain', 'sort-price%3Adesc')

    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeGreaterThan(0)
    })
  })

  it('should filter by price', () => {
    cy.findByText(/highest to lowest/i).click()
  })
})
