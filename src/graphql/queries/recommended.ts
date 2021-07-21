import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        highlight {
          ...HighlightFragment
        }
        games(limit: 8) {
          ...GameFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
