/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  before(() => {
    cy.visit('/game/cyberpunk-2077')
  })

  it('should render home sections', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: 'Cyberpunk 2077' }).should('exist')
      cy.findByText(/Cyberpunk 2077 is an open world/i).should('exist')
      cy.findByText('$59.99').should('exist')
      cy.findByRole('button', { name: 'Add to Cart' }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb  \-/i }).should('have.length.gt', 0)]

    // content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })
    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    // Details
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')
      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')

      cy.findAllByText(/cd projekt red/i).should('have.length', 2)
      cy.findByText(/dec 8, 2020/i).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Role-playing / Action / Sci-fi').should('exist')
    })

    cy.shouldRenderShowcase({ name: "Upcoming Games", highlight: true })
    cy.shouldRenderShowcase({ name: "You may like these games", highlight: false })
  })

  it('should add/remove game in cart', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: 'Add to Cart' }).click()
      cy.findByRole('button', { name: '/remove from cart/i' }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).first().should('have text', 1).click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i }).should('exist')
    })

    cy.findAllByText(/cart items/i).first().click()

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: '/remove from cart/i' }).click()
    })

    cy.findAllByText(/cart items/i).should('not.exist')
  })
})
