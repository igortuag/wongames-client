import { gql } from '@apollo/client'

export const QUERY_WISHLIST = gql`
  query QueryWishlist {
    wishlist {
      id
      games {
        id
        name
      }
    }
  }
`
