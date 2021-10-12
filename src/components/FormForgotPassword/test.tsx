import 'server.mock'
import { screen, render } from 'utils/test-utils'

import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter', 'useRouter')
const query = {}

useRouter.mockImplementation(() => ({ query }))

describe('<FormForgotPassword />', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />)

    expect(screen.getByPlaceHolderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send email/i })
    ).toBeInTheDocument()
  })
})
