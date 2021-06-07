import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => (
  <S.Wrapper>
    <h1>Dropdown</h1>
  </S.Wrapper>
)

export default Dropdown
