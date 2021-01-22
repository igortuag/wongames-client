import * as S from './styles'

export type RibbonProps = {
  children: React.ReactNode
}

const Ribbon = ({ children }: RibbonProps) => <S.Wrapper>{children}</S.Wrapper>

export default Ribbon
