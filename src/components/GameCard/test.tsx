import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it(`should render price in label`, () => {
    // renderizar o componente
    // preço não tenha line-through
    // preço não tenha cor cinza
    // preço tenha o background secundário
  })

  it(`should render a line-trough in price when promotional`, () => {
    // renderizar o componente (COM promotionalPrice) // 200 reais // 15 reais
    // preço não tenha line-through (200)
    // preço novo promocional não vai ter line line-through (15)
  })
})
