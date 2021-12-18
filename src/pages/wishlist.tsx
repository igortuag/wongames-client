import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper } from 'utils/mappers'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloCliente = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  await apolloCliente.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user.email as string
    }
  })

  const { data } = await apolloCliente.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      initializeApollo: apolloCliente.cache.extract(),
      recommendedTitle: data.recommended?.section?.highlight?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlights: highlightMock
    }
  }
}
