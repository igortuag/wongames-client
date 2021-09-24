import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import { FormWrapper, FormLink, FormLoading } from 'components/Form'
import TextField from 'components/TextField'
import * as S from './styles'
import { FieldErros, signInValidate } from 'utils/validations'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErros>({
    email: '',
    password: ''
  })
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length > 0) {
      setFieldError(errors)
      setLoading(false)
      return
    }
    setFieldError({ email: '', password: '' })
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }
    setLoading(false)

    setFormError('Username or password is invalid')
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && <span>{formError}</span>}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <s>Sign up</s>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
