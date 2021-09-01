import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'

type CartButtonProps = {
  id: string
}

const CartButton = ({ id }: CartButtonProps) => {
  return <Button icon={<AddShoppingCart />} size="small" />
}

export default CartButton
