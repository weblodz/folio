import ZipCodeInput from '@components/UiKit/FormInputs/ZipCodeInput'

export default {
  title: 'ZipCodeInput',
  component: ZipCodeInput,
  argTypes: {
    isValid: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
    },
    zipTouched: {
      control: 'boolean',
    },
  },
}

export const EmptyValid = {
  args: {
    isValid: true,
    errorMessage: '',
    defaultValue: '',
    zipTouched: false,
  },
}

export const EmptyInvalid = {
  args: {
    isValid: false,
    errorMessage: 'Enter your Zip code',
    defaultValue: '',
    zipTouched: true,
  },
}

export const Valid = {
  args: {
    isValid: true,
    errorMessage: '',
    defaultValue: '00-001',
    zipTouched: true,
  },
}

export const Invalid = {
  args: {
    isValid: false,
    errorMessage: 'Ensure your ZIP code is correct',
    defaultValue: '10001',
    zipTouched: true,
  },
}
