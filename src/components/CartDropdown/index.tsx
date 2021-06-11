import { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <h1>CartDropdown</h1>
  </S.Wrapper>
)

export default CartDropdown
