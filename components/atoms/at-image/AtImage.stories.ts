import type { Meta, StoryObj } from '@storybook/vue3'

import AtImage from './AtImage.vue'

const meta = {
  title: 'Atoms/AtImage',
  component: AtImage,
  tags: ['autodocs']
} satisfies Meta<typeof AtImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    file: {
      url: 'https://picsum.photos/200/300',
      description: '',
      title: ''
    }
  }
}
