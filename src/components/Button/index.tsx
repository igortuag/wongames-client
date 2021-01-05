import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
}

const Button = ({ children }: ButtonProps) => (
  <S.Wrapper>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
