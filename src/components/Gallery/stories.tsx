import { Story, Meta } from '@storybook/react/types-6-0'
import Gallery from '.'
import items from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <Gallery />
