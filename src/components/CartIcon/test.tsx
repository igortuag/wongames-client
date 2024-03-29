import { screen, render } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    render(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 3 }
    })

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.queryByText(/3/)).toBeInTheDocument()
  })
})
