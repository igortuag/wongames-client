import * as S from './styles'

export type CheckboxProps = {
  label: string
}

const Checkbox = ({ label }: CheckboxProps) => (
  <S.Wrapper>
    <input id="action" type="checkbox" />
    <label htmlFor="action">{label}</label>
  </S.Wrapper>
)

export default Checkbox
