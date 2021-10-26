import { useContext } from 'react'
import { GameCardProps } from 'components/GameCard'
import { createContext } from 'react'
import { useQueryWishilist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'

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
  const isInWishlist = (id: string) => false
  const addToWishlist = (id: string) => {}
  const removeFromWishlist = (id: string) => {}

  const { data, loading } = useQueryWishilist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  return (
    <WishlistContext.Provider
      value={{
        items: data,
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
