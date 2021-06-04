import { GameCardProps } from 'components/GameCard'
import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
}

const GamesTemplate = ({ games = [] }: GamesTemplateProps) => (
  <Base>
    <h1>Games</h1>
  </Base>
)

export default GamesTemplate
