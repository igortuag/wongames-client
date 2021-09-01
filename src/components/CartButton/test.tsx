import { screen, render } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'
import userEvent from '@testing-library/user-event'

import CartButton from '.'

describe('<CartButton />', () => {
  it('should render button to add and call the method if clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/add ti cart/i)

    expect(button).toBeInTheDocument()

    userEvent.click(button)

    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1')
  })
})
