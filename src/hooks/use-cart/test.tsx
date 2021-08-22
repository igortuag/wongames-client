import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'

import { useCart, CartProvider, CartProviderProps } from '.'

describe('useCart', () => {
  it('should return items and its info there are any in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    setStorageItem('cartItem', ['1', '2'])

    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toStrictEqual(['1', '2'])
  })
})
