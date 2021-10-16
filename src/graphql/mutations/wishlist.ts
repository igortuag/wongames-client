import { gql } from '@apollo/client'

export const MUTATION_WISHILIST = gql`
  mutation MutationCreateWishlist($input: createWishList!) {
    createWishList(input: $input) {
      id
      user {
        id
        username
      }
      games {
        id
        name
      }
  }
`
