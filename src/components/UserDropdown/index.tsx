import Link from 'next/link'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import Dropdown from 'components/Dropdown'
import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        {username}
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me">
        <S.Link title="My profile">
          <AccountCircle />
          <span>My profile</span>
        </S.Link>
      </Link>
      <Link href="/wishlist">
        <S.Link title="Wishlist">
          <FavoriteBorder />
          <span>My profile</span>
        </S.Link>
      </Link>
      <Link href="/logout">
        <S.Link title="Sign out">
          <ExitToApp />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
