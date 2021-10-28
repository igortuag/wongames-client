import { useContext, useEffect, useState, useMemo } from 'react'
import { GameCardProps } from 'components/GameCard'
import { createContext } from 'react'
import { useQueryWishilist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { gamesMapper } from 'utils/mappers'
import { useMutation } from '@apollo/client'
import { MUTATION_CREATE_WISHILIST } from 'graphql/mutations/wishlist'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loadign: boolean
}

export const WishlistContextDefaultValues = {
  item: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistId, setiWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] =
    useState<QueryWishlist_wishlist_games>([])

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHILIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data.createWishlist.games)
        setiWishlistId(data.createWishlist.wishlist?.id)
      }
    }
  )

  const { data, loading } = useQueryWishilist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setWishlistItems(data?.wishlist[0]?.games || [])
    setiWishlistId(data?.wishlist[0]?.id)
  }, [data])

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const wishlistIds = useMemo(
    () => wishlistItems.map((game) => game.id),
    [wishlistItems]
  )

  const addToWishlist = (id: string) => {
    return createList({
      variables: {
        input: {
          data: {
            games: [...wishlistIds, id]
          }
        }
      }
    })
  }

  const removeFromWishlist = (id: string) => {}

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
