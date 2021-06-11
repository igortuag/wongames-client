import { Story, Meta } from '@storybook/react/types-6-0'
import CartDropdown, { CartDropdownProps } from '.'

export default {
  title: 'CartDropdown',
  component: CartDropdown
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <CartDropdown {...args} />
)
