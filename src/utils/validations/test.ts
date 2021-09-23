import { signUpValidate, signInValidate } from '.'

describe('validations', () => {
  describe('signInValidate', () => {
    it('should validate empty fields', () => {
      const values = {
        email: '',
        password: ''
      }

      expect(signInValidate(values)).toMatchObject({
        email: 'email is not allowed to be empty',
        password: 'password is not allowed to be empty'
      })
    })
    it('should return invalid email error', () => {
      const values = {
        email: 'invalid-email',
        password: '1234'
      }

      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })
})
