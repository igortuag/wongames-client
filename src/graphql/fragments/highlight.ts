import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatimage {
      url
    }
    buttonLabel
    buttonLink
    alignment
  }
`
