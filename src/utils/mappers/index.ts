import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import formatPrice from 'utils/format-price'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map(({ image, title, subtitle, button, ribbon }) => ({
    img: `http://localhost:1338${image?.url}`,
    title,
    subtitle,
    buttonLabel: button?.label || null,
    buttonLink: button?.link || null,
    ...(ribbon && {
      ribbon: ribbon.text,
      ribbonColor: ribbon.color,
      ribbonSize: ribbon.size
    })
  }))
}

export const gamesMapper = (
  games: QueryGames_games[] | QueryWishlist_wishlist_games[] | null | undefined
) => {
  if (!games || games?.length <= 0) return []

  return []
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1338${game.cover?.url}`,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return (
    highlight && {
      title: highlight?.title,
      subtitle: highlight?.subtitle,
      backgroundImage: `http://localhost:1338${highlight?.background?.url}`,
      floatImage: `http://localhost:1338${highlight?.floatImage?.url}`,
      buttonLabel: highlight?.buttonLabel,
      buttonLink: highlight?.buttonLink,
      aligment: highlight?.alignment
    }
  )
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: `http://localhost:1338${game?.cover?.url}`,
        title: game?.title,
        price: formatPrice(game.price)
      }))
    : []
}

export const ordersMapper = (orders?: QueryOrders_orders[]) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `http://localhost:1337${game.cover?.url}`,
            price: formatPrice(game.price)
          }))
        }
      })
    : []
}
