import { Email, Lock } from '@styled-icons/material-outlined'

import TextField from 'components/TextField'
import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgetPassword href="#">Forgot your password?</S.ForgetPassword>
    </form>
  </S.Wrapper>
)

export default FormSignIn
