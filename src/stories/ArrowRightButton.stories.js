import ArrowRightButton from '@components/UiKit/buttons/ArrowRight'

export default {
  title: 'buttons/ArrowRight',
  component: ArrowRightButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    buttonClass: { control: 'text' },
    size: { control: 'text' }, // or 'number' if preferred
    iconClass: { control: 'text' },
    isLightTheme: { control: 'boolean' }, // Added missing control
    onClick: { action: 'clicked' }, // Useful for testing button clicks
  },
}

// Светлая тема с черным фоном
export const LightTheme = {
  parameters: {
    backgrounds: { default: 'black' }, // ✅ Черный фон только для LightTheme
  },
  args: {
    buttonClass: '',
    isLightTheme: true,
    size: '18',
    iconClass: '',
  },
}

// Темная тема (фон по умолчанию)
export const DarkTheme = {
  parameters: {
    backgrounds: { default: 'white' }
  },
  args: {
    buttonClass: '',
    isLightTheme: false,
    size: '18',
    iconClass: '',
  },
}
