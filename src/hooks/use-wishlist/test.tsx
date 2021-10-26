import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useWishlist, WishlistProvider } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')

describe('useWishlist', () => {
  it('should return wishlist items', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    expect(result.current.loading).toBe(true)
  })
})
