import { gql } from '@apollo/client'

export const MUTATION_CREATE_WISHILIST = gql`
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

export const MUTATION_UPDATE_WISHILIST = gql`
  mutation MutationCreateWishlist($input: updateWishList!) {
    updateWishList(input: $input) {
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
