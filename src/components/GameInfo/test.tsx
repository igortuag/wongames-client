import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    renderWithTheme(<GameInfo {...props} />)

    // esperar por um heading (title)
    // esperar por um description
    // esperar pelo price
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    // esperar button add to cart
    // esperar button wishlist
  })
})
