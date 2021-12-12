import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: ID!) {
    orders(identifier: $identifier) {
      id
      created_ad
      card_brand
      card_last4
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
