import { MockedProvider } from '@apollo/client/testing'
import { act, renderHook } from '@testing-library/react-hooks'
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

    expect(result.current.loading).toBe(false)

    await waitForNextUpdate()

    expect(result.current.loading).toBe(true)

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

  it('should add item in the cart', () => {
    beforeEach(() => {
      window.localStorage.clear()
    })

    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    act(() => {
      result.current.addToCart('1')
    })

    expect(result.current.quantity).toBe(1)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify(['1'])
    )
  })

  it('should remove an item from the cart', () => {
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

    act(() => {
      result.current.removeFromCart('1')
    })

    expect(result.current.quantity).toBe(0)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify([])
    )
  })

  it('should clear the cart', () => {
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

    act(() => {
      result.current.clearCart()
    })

    expect(result.current.quantity).toBe(0)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify([])
    )
  })
})
