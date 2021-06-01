import Heading from 'components/Heading'
import * as S from './styles'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>
  </S.Wrapper>
)

export default ExploreSidebar
