import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import { Email, ErrorOutline } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import { FormWrapper, FormLoading, FormError } from 'components/Form'
import TextField from 'components/TextField'
import { FieldErros } from 'utils/validations'

const ResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErros>({
    email: ''
  })
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = {}

    if (Object.keys(errors).length > 0) {
      setFieldError(errors)
      setLoading(false)
      return
    }
    setFieldError({ email: '', password: '' })
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
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
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Send email</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default ResetPassword
