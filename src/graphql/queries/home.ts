import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  fragment BannerFragment on Banner {
    image {
      url
    }
    title
    subtitle
    button {
      label
      link
    }
    ribbon {
      text
      color
      size
    }
  }

  query QueryHome {
    banners {
      ...BannerFragment
    }
  }
`
