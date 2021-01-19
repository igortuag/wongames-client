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
    <S.Image src={img} role="img" aria-label={title} />
  </S.Wrapper>
)

export default Banner
