import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField name="name" placeholder="Name" label="Name" />
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
