import type { Meta, StoryObj } from '@storybook/vue3'

import AtButton from './AtButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Atoms/AtButton',
  component: AtButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    label: { control: 'text' },
    color: { control: 'select', options: ['primary', 'secondary'], default: 'primary' },
    outlined: { control: 'boolean' }
  },
  render: (args, { argTypes }) => ({
    components: { AtButton },
    props: Object.keys(argTypes),
    template: `<AtButton v-bind="$props"> My Button </AtButton>`
  })
} satisfies Meta<typeof AtButton>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {}
}
