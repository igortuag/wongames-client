import Link from 'next/link'
import { AccountCircle } from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import Dropdown from 'components/Dropdown'
import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <S.Wrapper>
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
        <Link>
          <S.Link>
            <AccountCircle />
            <span>My profile</span>
          </S.Link>
        </Link>
      </S.Nav>
    </Dropdown>
  </S.Wrapper>
)

export default UserDropdown
