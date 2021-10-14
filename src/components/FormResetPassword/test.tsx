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
})
