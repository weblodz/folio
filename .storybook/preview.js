/** @type { import('@storybook/react').Preview } */
import '/src/index.scss'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'black',
      values: [
        { name: 'white', value: 'var(--common-color-bg-primary)' },
        { name: 'black', value: 'var(--common-color-bg-inverse-primary)'}
      ],
    },
  },
}

export default preview
