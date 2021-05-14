import { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

const CardList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    <h1>CardList</h1>
  </S.Wrapper>
)

export default CardList
