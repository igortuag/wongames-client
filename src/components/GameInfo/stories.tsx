import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mockGame
} as Meta

export const Default: Story<GameInfoProps> = (args) => <GameInfo {...args} />
