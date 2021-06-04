import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { GameCardProps } from 'components/GameCard'
import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => console.log('filter')}
      />
    </S.Main>
  </Base>
)

export default GamesTemplate
