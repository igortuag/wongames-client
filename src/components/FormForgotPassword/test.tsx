import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignIn />)
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument()
  })
})
