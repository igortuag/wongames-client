import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    },
    fetchPolicy: 'no-cache' // garantir sempre dado novo na geração do estático
  })

  return {
    revalidate: 60,
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title || 'New game',
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle:
        sections?.popularGames?.title || 'Most Popular games',
      mostPopularHighlight:
        highlightMapper(sections?.popularGames?.highlight) || [],
      mostPopularGames: gamesMapper(
        sections?.upcomingGames?.games || 'Most Popular Games'
      ),
      upcomingGamesTitle: sections?.upcomingGames?.title || 'Upcoming Games',
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight:
        highlightMapper(sections?.upcomingGames?.highlight) || [],
      freeGamesTitle: sections?.freeGames?.title || 'Free games',
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight) || []
    }
  }
}
