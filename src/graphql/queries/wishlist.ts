import { gql, QueryHookOptions } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import {
  QueryWishlist,
  QueryWishListVariables
} from 'graphql/generated/QueryWishlist'

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

export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlist, QueryWishListVariables>
) {
  return useQuery<QueryWishlist, QueryWishListVariables>(
    QUERY_WISHLIST,
    options
  )
}
