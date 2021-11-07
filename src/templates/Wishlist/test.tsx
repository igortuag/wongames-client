import 'session.mock'

import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

const props = {
  recommendedHighlight: highlightMock,
  recommendTitle: 'You may like this games',
  recommendedGames: gamesMock
}

jest.mock(`templates/Base`, () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }

    renderWithTheme(<Wishlist {...props} />, { wishlistProviderProps })

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: []
    }

    renderWithTheme(
      <Wishlist
        recommendedHighlight={highlightMock}
        recommendedGames={gamesMock}
        recommendTitle="You may like this games"
      />,
      { wishlistProviderProps }
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
