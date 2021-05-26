import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My Cards
    </Heading>
  </S.Wrapper>
)

export default CardsList
