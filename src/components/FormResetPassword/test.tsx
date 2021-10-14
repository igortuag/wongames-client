import 'server.mock'
import { signIn } from 'next-auth/client'

import { screen, render, userEvent, waitFor } from 'utils/test-utils'

import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter', 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({ query }))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword />', () => {
  it('should render the form', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceHolderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceHolderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset password/i })
    ).toBeInTheDocument()
  })

  it('should show validate errors', async () => {
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceHolderText('Password'), '123')
    await userEvent.type(screen.getByPlaceHolderText('confirm password'), '321')

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(
      await screen.findByText(/confirm password does not match/i)
    ).toBeInTheDocument()
  })

  it('should show validation errors', async () => {
    query = { code: 'wrong_code' }
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceHolderText('Password'), '123')
    await userEvent.type(screen.getByPlaceHolderText('confirm password'), '123')

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(
      await screen.findByText(/Incorrect code provided/i)
    ).toBeInTheDocument()
  })

  it('should reset the password and sign in the user', async () => {
    query = { code: 'right_code' }
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceHolderText('Password'), '123')
    await userEvent.type(screen.getByPlaceHolderText('confirm password'), '123')

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123',
        callbackUrl: '/'
      })
    })
  })
})
