import Heading from 'components/Heading'
import * as S from './styles'

const PaymentOptions = () => (
  <S.Wrapper>
    <S.Body>
      <Heading color="black" lineBottom size="small">
        Payment
      </Heading>

      <S.CardList></S.CardList>
    </S.Body>
    <S.Footer></S.Footer>
  </S.Wrapper>
)

export default PaymentOptions
