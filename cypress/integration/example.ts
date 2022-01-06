// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it.skip('should go to Google', () => {
    cy.google()
  })

  it.skip('should change light/dark theme on willian justen site', () => { 
    cy.visit('https://willianjusten.com.br/')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.light').should('exist')
    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.dark').should('exist')
  })

  it('should vist won games', () => {
    cy.visit('https://wongames.willianjusten.com.br/')

    cy.findByText(/Esse é um site de estudos!/i).should('exist')
  })
})
