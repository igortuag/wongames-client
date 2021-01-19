import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <S.Wrapper>
    <h1>Banner</h1>
  </S.Wrapper>
)

export default Banner
