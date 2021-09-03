import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'

import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
  hasText: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      size="small"
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    />
  )
}

export default CartButton
