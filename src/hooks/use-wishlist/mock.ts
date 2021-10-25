import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const gameMock = (id: string) => ({
  id,
  name: 'Sample Game',
  slug: 'sample-game',
  price: 10.5,
  developers: [{ name: 'sample developer ' }],
  cover: {
    src: '/sample-game-jpg'
  },
  __typename: 'Game'
})

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
          games: [gameMock('1'), gameMock('2')]
        }
      ]
    }
  }
}
