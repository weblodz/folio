import ZipCodeInput from '@components/UiKit/FormInputs/ZipCodeInput'

export default {
  title: 'Components/ZipCodeInput',
  component: ZipCodeInput,
  argTypes: {
    isValid: {
      control: 'boolean',
      description: 'Whether the ZIP code is valid',
    },
    errorMessage: {
      control: 'text',
      description: 'The error message to display when the ZIP code is invalid',
    },
    defaultValue: {
      control: 'text',
      description: 'The default value for the ZIP code input',
    },
  },
}

export const EmptyValid = {
  args: {
    isValid: true,
    errorMessage: '',
    defaultValue: '',
  },
}

export const EmptyInvalid = {
  args: {
    isValid: false,
    errorMessage: 'Enter your Zip code',
    defaultValue: '',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input')

    input.focus()
    input.blur()
  },
}

export const Valid = {
  args: {
    isValid: true,
    errorMessage: '',
    defaultValue: '00-001',
  },
}

export const Invalid = {
  args: {
    isValid: false,
    errorMessage: 'Ensure your ZIP code is correct',
    defaultValue: '10001',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input')

    input.focus()
    input.blur()
  },
}
