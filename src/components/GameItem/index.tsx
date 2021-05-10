import * as S from './styles'

export type GameItemProps = {
  img: string
  title: string
  price: string
}

const GameItem = ({ img, title, price }: GameItemProps) => (
  <S.Wrapper>
    <h1>GameItem</h1>
  </S.Wrapper>
)

export default GameItem
