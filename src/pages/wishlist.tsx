import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper } from 'utils/mappers'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloCliente = initializeApollo()

  const { data } = await apolloCliente.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlights: highlightMock
    }
  }
}
