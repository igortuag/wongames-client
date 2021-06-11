import { Story, Meta } from '@storybook/react/types-6-0'
import CartDropdown, { CartDropdownProps } from '.'

import items from 'components/CardsList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: 'R$ 300,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <CartDropdown {...args} />
)
