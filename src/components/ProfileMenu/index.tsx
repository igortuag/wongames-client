import { AccountCircle } from '@styled-icons/material-outlined'
import Link from 'next/link'
import * as S from './styles'

const ProfileMenu = () => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link>
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
