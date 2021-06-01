import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import * as S from './styles'
import Radio from 'components/Radio'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Checkbox name="under-50" label="under $50" labelFor="under-50" />
    <Checkbox name="under-100" label="under $100" labelFor="under-100" />
    <Checkbox name="under-150" label="under $150" labelFor="under-150" />
    <Checkbox name="under-200" label="under $200" labelFor="under-200" />
    <Checkbox name="free" label="Free" labelFor="free" />
    <Checkbox name="discounted" label="Discounted" labelFor="discounted" />

    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>
    <Radio
      id="hight-to-low"
      name="sort-by"
      label="High to low"
      labelFor="hight-to-low"
      value="high-to-low"
    />

    <Radio
      id="low-to-hight"
      name="sort-by"
      label="Low to hight"
      labelFor="low-to-hight"
      value="low-to-hight"
    />

    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>
    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>
  </S.Wrapper>
)

export default ExploreSidebar
