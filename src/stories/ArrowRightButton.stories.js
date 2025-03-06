import ArrowRightButton from '@components/UiKit/Buttons/ArrowRight'

export default {
  title: 'buttons/ArrowRight',
  component: ArrowRightButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    buttonClass: { control: 'text' },
    size: { control: 'text' },
    iconClass: { control: 'text' },
    isLightTheme: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
}

export const LightTheme = {
  parameters: {
    backgrounds: { default: 'black' },
  },
  args: {
    buttonClass: '',
    isLightTheme: true,
    size: '18',
    iconClass: '',
  },
}

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
