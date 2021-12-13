import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryHome_banners } from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

import { bannerMapper, gamesMapper, cartMapper, ordersMapper } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'Banner Title',
      subtitle: 'Banner Subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small '
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1338/image.jpg',
        title: 'Banner Title',
        subtitle: 'Banner Subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small '
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const games = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'developer'
        }
      ],
      slug: 'game',
      cover: {
        url: '/image.jpg'
      },
      price: 10
    } as QueryGames_games

    expect(gamesMapper([games])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: 'http://localhost:1338/image.jpg',
        price: 10
      }
    ])
  })
})

describe('cartMapper()', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const games = {
      id: '1',
      name: 'game',
      cover: {
        url: '/image.jpg'
      },
      price: 10
    } as QueryGames_games

    expect(gamesMapper([games])).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1338/image.jpg',
        title: 'game',
        price: 10
      }
    ])
  })
})

describe('ordersMapper()', () => {
  it('should return empty array if no orders', () => {
    expect(ordersMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    it('should return mapped items', () => {
      const orders = [
        {
          __typename: 'Order',
          id: '1',
          card_brand: 'visa',
          card_last4: '4242',
          created_at: '2021-04-14T18:41:48.358Z',
          games: [
            {
              id: '1',
              name: 'game',
              developers: [
                {
                  name: 'developer'
                }
              ],
              slug: 'game',
              cover: {
                url: '/image.jpg'
              },
              price: 10
            }
          ]
        }
      ] as QueryOrders_orders[]

      expect(ordersMapper(orders)).toStrictEqual([
        {
          id: '1',
          paymentInfo: {
            flag: 'visa',
            img: '/img/cards/visa.png',
            number: '**** **** **** 4242',
            purchaseDate: 'Purchase made on Apr 14, 2021'
          },
          games: [
            {
              id: '1',
              title: 'game',
              downloadLink:
                'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
              img: 'http://localhost:1337/image.jpg',
              price: '$10.00'
            }
          ]
        }
      ])
    })
  })
})
