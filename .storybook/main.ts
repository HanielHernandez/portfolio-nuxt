import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
    //'storybook-addon-nuxt'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {}
}
export default config
