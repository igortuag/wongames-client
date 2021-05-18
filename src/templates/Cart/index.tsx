import Heading from 'components/Heading'
import { Container } from 'next/app'
import Base from 'templates/Base'
import * as S from './styles'

const Cart = () => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My Cart
      </Heading>
    </Container>
  </Base>
)

export default Cart
