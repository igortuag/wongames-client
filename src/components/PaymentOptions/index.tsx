import { Add } from '@styled-icons/material-outlined'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
  <S.Wrapper>
    <S.Body>
      <Heading color="black" lineBottom size="small">
        Payment
      </Heading>

      <S.CardList>
        {cards?.map((card) => (
          <S.CardItem key={card.number}>
            <S.CardInfo>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </S.CardInfo>
            <Radio
              name="credit-card"
              id={card.number}
              value={card.number}
              onCheck={() => ({})}
            />
          </S.CardItem>
        ))}
        <S.AddCard role="button">
          <Add /> Add a new credit card
        </S.AddCard>
      </S.CardList>
    </S.Body>
    <S.Footer></S.Footer>
  </S.Wrapper>
)

export default PaymentOptions