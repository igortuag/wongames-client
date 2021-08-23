import { useQueryGames } from 'graphql/queries/games'
import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { createContext } from 'react'
import { getStorageItem } from 'utils/localStorage'

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
}

export const CartContextDefaultValues = {}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const = { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: cartItems
    }
  })

  return (
    <CartContext.Provider
      value={{
        items: data!.games
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
