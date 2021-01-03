import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default Heading
