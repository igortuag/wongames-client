import Heading from 'components/Heading'
import { Container } from 'next/app'
import Base from 'templates/Base'
import * as S from './styles'

const Profile = () => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My profile
      </Heading>

      <S.Main></S.Main>
    </Container>
  </Base>
)

export default Profile
