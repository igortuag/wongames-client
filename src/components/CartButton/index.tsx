import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
}

const CartButton = ({ id }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  return (
    <Button icon={<AddShoppingCart />} aria-label="Add to cart" size="small" />
  )
}

export default CartButton
