import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Auth = () => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Heading>All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.Subtitle>
    </S.BannerBlock>
  </S.Wrapper>
)

export default Auth
