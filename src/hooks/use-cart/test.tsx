import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'

import { useCart, CartProvider, CartProviderProps } from '.'
import { cartItems, gamesMock } from './mock'

describe('useCart', () => {
  it('should return items and its info there are any in the cart', async () => {
    beforeEach(() => {
      window.localStorage.clear()
    })
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItem', ['1', '2'])

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper
    })

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual(cartItems)
    expect(result.current.quantity).toBe(2)
    expect(result.current.total).toBe('$21.00')
  })

  it('should return true/false if the item is already in the cart', () => {
    beforeEach(() => {
      window.localStorage.clear()
    })

    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItem', ['1'])

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    expect(result.current.isInCart('1')).toBe(true)
    expect(result.current.isInCart('2')).toBe(false)
  })
})
