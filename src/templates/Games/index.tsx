import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
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

      <Grid></Grid>
    </S.Main>
  </Base>
)

export default GamesTemplate
