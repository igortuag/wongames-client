import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { useWishlist } from 'hooks/use-wishlist'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
}

const WishlistButton = ({ id, hasText }: WishlistButtonProps) => {
  const { isInWishlist } = useWishlist()

  const buttonText = isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )
      }
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
