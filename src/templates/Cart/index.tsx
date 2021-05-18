import { CartListProps } from 'components/CardList'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { Container } from 'next/app'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total
}: CartProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My Cart
      </Heading>

      <S.Content></S.Content>
      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Cart
