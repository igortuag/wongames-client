import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_WISHLIST = gql`
  query QueryWishlist {
    wishlist {
      id
      games {
        ...GameFragment
      }
    }
  }

  ${GameFragment}
`
