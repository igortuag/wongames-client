import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import * as S from './styles'

const Showcase = () => (
  <S.Wrapper>
    <Heading lineLeft lineColor="secondary">
      Free games
    </Heading>
    <Highlight {...freeHighlight} />
    <GameCardSlider items={freeGames} />
  </S.Wrapper>
)

export default Showcase
