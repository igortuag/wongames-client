import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'
import { useState } from 'react'
import { useWishlist } from 'hooks/use-wishlist'
import { useSession } from 'next-auth/client'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()
  const [loading, setLoading] = useState(false)
  const { isInWishlist, removeFromWishlist, addToWishlist } = useWishlist()

  const handleClick = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  const buttonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  if (!session) return null

  return (
    <Button
      onClick={handleClick}
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={buttonText} />
        ) : (
          <FavoriteBorder aria-label={buttonText} />
        )
      }
      minimal
      size={size}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
