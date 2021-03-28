import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: Story = () => <Showcase />
