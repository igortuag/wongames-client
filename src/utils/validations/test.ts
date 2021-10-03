import {
  signUpValidate,
  signInValidate,
  forgotPasswordValidate,
  resetPasswordValidate
} from '.'

describe('validations', () => {
  describe('signInValidate', () => {
    it('should validate empty fields', () => {
      const values = {
        email: '',
        password: ''
      }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
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

  describe('signUpValidate', () => {
    it('should validate empty fields', () => {
      const values = {
        username: '',
        email: '',
        password: ''
      }

      expect(signUpValidate(values)).toMatchObject({
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String)
      })
    })

    it('should return short username error', () => {
      const values = {
        username: 'hi',
        email: '',
        password: '',
        confirm_password: ''
      }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        username: 'username',
        email: 'invalid-email',
        password: '1234',
        confirm_password: '1234'
      }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        username: 'username',
        email: 'invalid-email',
        password: '1234',
        confirm_password: '4321'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"Password and confirm password must be the same"`
      )
    })
  })

  describe('forgotPasswordValidate', () => {
    it('should validate empty fields', () => {
      const values = {
        email: ''
      }

      expect(forgotPasswordValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty'
      })
    })
    it('should return invalid email error', () => {
      const values = {
        email: 'invalid-email'
      }

      expect(forgotPasswordValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('resetPasswordValidate', () => {
    it('should validate empty password', () => {
      const values = {
        password: '',
        confirm_password: ''
      }

      expect(resetPasswordValidate(values)).toMatchObject({
        password: expect.any(String)
      })
    })

    it('should return error if confirm_password is empty', () => {
      const values = {
        password: '1234',
        confirm_password: ''
      }

      expect(resetPasswordValidate(values)).toMatchObject({
        confirm_password: expect.any(String)
      })
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        password: '1234',
        confirm_password: '4321'
      }

      expect(
        resetPasswordValidate(values).confirm_password
      ).toMatchInlineSnapshot(
        `"Password and confirm password must be the same"`
      )
    })
  })
})
