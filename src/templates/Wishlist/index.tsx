import Base from 'templates/Base'

import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Heading from 'components/Heading'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps
  recommendedHighlight: HighlightProps
}

const Wishlist = () => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
  </Base>
)

export default Wishlist
