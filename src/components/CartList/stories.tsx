import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'

import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: 'R$: 330,00',
  cartContextValue: { items }
}

export const withButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

withButton.args = {
  total: 'R$: 330,00',
  cartContextValue: { items }
}

export const Empty: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
