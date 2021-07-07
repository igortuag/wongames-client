import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'

export const QUERY_HOME = gql`
  ${BannerFragment}

  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2021-01-27" }
      sort: "release_date:desc"
      limit: 8
    ) {
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`
