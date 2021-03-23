import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'

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

      <Button size="large" fullWidth>
        Sign in now
      </Button>
    </form>
  </S.Wrapper>
)

export default FormSignIn
