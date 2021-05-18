import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CardList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlights: highlightMock
    }
  }
}
