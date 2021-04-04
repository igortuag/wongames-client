import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

const GameDetails = () => (
  <S.Wrapper>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary">
        Game Details
      </Heading>
    </MediaMatch>
  </S.Wrapper>
)

export default GameDetails
