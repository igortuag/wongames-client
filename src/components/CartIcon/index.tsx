import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import * as S from './styles'

const CartIcon = () => (
  <S.Wrapper>
    <S.Badge aria-label="Cart Items">12</S.Badge>
    <ShoppingCart aria-label="Shopping Cart" />
  </S.Wrapper>
)

export default CartIcon
