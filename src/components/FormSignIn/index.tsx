import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import * as S from './styles'

const FormSignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

    console.error('email ou senha invalida')
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth>
          Sign in now
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
