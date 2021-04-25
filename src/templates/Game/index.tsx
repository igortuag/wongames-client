import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Base from 'templates/Base'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
}

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover"></S.Cover>

    <GameInfo {...gameInfo} />
  </Base>
)

export default Game
