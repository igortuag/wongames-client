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
  })
})
