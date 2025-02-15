/** @type { import('@storybook/react').Preview } */
import '../src/index.scss'

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
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' },
        { name: 'gray', value: '#808080' },
      ],
    },
  },
}

export default preview
