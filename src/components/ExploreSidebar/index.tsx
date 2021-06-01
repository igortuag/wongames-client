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
    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>
    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>
  </S.Wrapper>
)

export default ExploreSidebar
