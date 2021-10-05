import { useState } from 'react'

import { Email, ErrorOutline } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import { FormWrapper, FormLoading, FormError } from 'components/Form'
import TextField from 'components/TextField'
import { FieldErros, forgotPasswordValidate } from 'utils/validations'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErros>({
    email: ''
  })
  const [values, setValues] = useState({
    email: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotPasswordValidate(values)

    if (Object.keys(errors).length > 0) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'aplication/json' },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      console.log('Error ::>>', data)
      console.log(values)
      setFormError(data.message[0].messages[0].message)
    } else {
      console.log('Success ::>>', data)
    }
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
          type="text"
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

export default FormForgotPassword
