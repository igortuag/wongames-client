import { GalleryImageProps } from 'components/Gallery'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Base from 'templates/Base'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps
}

const Game = ({ cover, gameInfo, gallery }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover"></S.Cover>
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
)

export default Game
