import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import { Container } from 'next/app'
import Base from 'templates/Base'
import * as S from './styles'

const Profile = () => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My profile
      </Heading>

      <S.Main>
        <ProfileMenu />

        <S.Content></S.Content>
      </S.Main>
    </Container>
  </Base>
)

export default Profile
