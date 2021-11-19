import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import highlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { gamesMapper } from 'utils/mappers'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloCliente = initializeApollo(null, session)

  const { data } = await apolloCliente.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.highlight?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlights: highlightMock
    }
  }
}
