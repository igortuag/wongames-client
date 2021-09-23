import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

const fieldsValidation = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required()
}

export type FieldErros = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErros = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }
  return errors
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {}

type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>
export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidation
  const schema = Joi.object({ email, password })

  return schema.validate(values, { abortEarly: false })
}
