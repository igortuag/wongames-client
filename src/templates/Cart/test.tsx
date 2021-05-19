import { render, screen } from '@testing-library/react'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CardList/mock'
import cardsMock from 'components/PaymentOptions/mock'

import Cart from '.'

const props = {
  items: itemsMock,
  total: '$ 430,00',
  cards: cardsMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

describe('<Cart />', () => {
  it('should render the heading', () => {
    const { container } = render(<Cart />)

    expect(screen.getByRole('heading', { name: /Cart/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
