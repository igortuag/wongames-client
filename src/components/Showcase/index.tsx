import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps
}

const Showcase = ({ title, highlight, games }: ShowcaseProps) => (
  <S.Wrapper>
    <Heading lineLeft lineColor="secondary">
      Free games
    </Heading>
    <Highlight {...freeHighlight} />
    <GameCardSlider items={freeGames} />
  </S.Wrapper>
)

export default Showcase
