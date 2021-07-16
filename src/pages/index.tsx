import Home, { HomeTemplateProps } from 'templates/Home'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  console.log('BANNERS :>>', banners)

  return {
    props: {
      revalidate: 60,
      banners: banners.map(({ image, title, subtitle, button, ribbon }) => ({
        img: `http://localhost:1337${image?.url}`,
        title,
        subtitle,
        buttonLabel: button?.label || null,
        buttonLink: button?.link || null,
        ...(ribbon && {
          ribbon: ribbon.text,
          ribbonColor: ribbon.color,
          ribbonSize: ribbon.size
        })
      })),
      newGamesTitle: sections.newGames?.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      mostPopularGamesTitle: sections.popularGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background.url}`,
        floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage.url}`,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        aligment: sections?.popularGames?.highlight?.alignment
      },
      mostPopularGames: sections?.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcomingGamesTitle: sections.upcomingGames?.title,
      upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcomingHighlight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background.url}`,
        floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage.url}`,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        aligment: sections?.upcomingGames?.highlight?.alignment
      },
      freeGamesTitle: sections.freeGames?.title,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      freeHighlight: highlightMock
    }
  }
}
