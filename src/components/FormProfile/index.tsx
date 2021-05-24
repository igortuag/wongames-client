import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />

      <TextField
        type="email"
        name="email"
        placeholder="E-mail"
        label="E-mail"
        initialValue="johndoe@gmail.com"
        disabled
      />
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
