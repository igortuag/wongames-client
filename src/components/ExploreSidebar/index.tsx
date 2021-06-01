import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import * as S from './styles'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Checkbox name="under-50" label="under $50" labelFor="under-50" />
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
