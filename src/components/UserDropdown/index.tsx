import { AccountCircle } from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import Dropdown from 'components/Dropdown'
import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={username}>content</Dropdown>
  </S.Wrapper>
)

export default UserDropdown
