import 'server.mock'
import { screen, render, userEvent } from 'utils/test-utils'

import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter', 'useRouter')
const query = {}

useRouter.mockImplementation(() => ({ query }))

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
})
