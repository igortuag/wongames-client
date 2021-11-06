import { gql } from '@apollo/client'

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishlist($input: createWishlistInput!) {
    createWishlist(input: $input) {
      wishlist {
        id
        users {
          id
          username
        }
        games {
          id
          name
        }
      }
    }
  }
`

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlist($input: updateWishlistPayload!) {
    updateWishlist(input: $input) {
      wishlist {
        id
        users {
          id
          username
        }
        games {
          id
          name
        }
      }
    }
  }
`
