import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

const CardList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}
  </S.Wrapper>
)

export default CardList
