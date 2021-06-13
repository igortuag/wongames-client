import { Story, Meta } from '@storybook/react/types-6-0'
import UserDropdown from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    background: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <UserDropdown />
