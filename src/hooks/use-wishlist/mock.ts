import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      identifier: 'lorem@ipsum.com'
    }
  },
  result: {
    data: {
      wishlist: [
        {
          id: '1',
          name: 'Lorem ipsum',
          games: [{}]
        }
      ]
    }
  }
}
