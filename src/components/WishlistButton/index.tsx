import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { useWishlist } from 'hooks/use-wishlist'

type WishlistButtonProps = {
  id: string
}

const WishlistButton = ({ id }: WishlistButtonProps) => {
  const { isInWishlist } = useWishlist()

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )
      }
    />
  )
}

export default WishlistButton
