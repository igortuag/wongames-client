import Logo from 'components/Logo'
import Heading from 'components/Heading'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer
