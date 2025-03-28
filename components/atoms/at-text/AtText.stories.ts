import type { Meta, StoryObj } from '@storybook/vue3'
import AtText from './AtText.vue'

const meta = {
    title: 'Atoms/AtText',
    component: AtText,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            type: 'string',
            control: {
                type: 'select'
            },
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph', 'label', 'list-title', 'link']
        }
    },

    render: (args) => ({
        components: { AtText },
        setup() {
            return args
        },
        template: `<AtText v-bind="args"> My text </AtText>`
    })
} satisfies Meta<typeof AtText>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        variant: 'h1'
    }
}
