import CityInput from '@components/UiKit/FormInputs/CityInput'

export default {
  title: 'Components/CityInput',
  component: CityInput,
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default selected city',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the dropdown starts open',
    },
    onChange: {
      action: 'changed',
      description: 'Triggered when a city is selected',
    },
    errorMessage: {
      control: 'text',
      description: 'Custom error message',
    },
  },
}

export const EmptyValid = {
  args: {
    defaultValue: '',
  },
}

export const EmptyInvalid = {
  args: {
    defaultValue: '',
    errorMessage: 'Select your city',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input')

    input.focus()
    input.blur()
  },
}

export const OpenedDropdown = {
  args: {
    defaultValue: '',
    defaultOpen: true,
  },
}
