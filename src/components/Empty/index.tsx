import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
}

const Empty = ({ title, description }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="a gamer in a couch playing videogame"
      role="image"
    ></S.Image>
  </S.Wrapper>
)

export default Empty
