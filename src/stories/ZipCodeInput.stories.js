import ZipCodeInput from '@components/UiKit/FormInputs/ZipCodeInput'

export default {
  title: 'ZipCodeInput',
  component: ZipCodeInput,
  argTypes: {
    country: {
      control: 'radio',
      options: ['Poland', 'United Kingdom'],
    },
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
    setZip: { action: 'setZip' },
    setCity: { action: 'setCity' },
  },
}

export const EmptyValid = {
  args: {
    country: 'Poland',
    isValid: true,
    errorMessage: '',
    defaultValue: '',
    zipTouched: false,
  },
}

export const EmptyInvalid = {
  args: {
    country: 'Poland',
    isValid: false,
    errorMessage: 'Enter your Zip code',
    defaultValue: '',
    zipTouched: true,
  },
}

export const Valid = {
  args: {
    country: 'Poland',
    isValid: true,
    errorMessage: '',
    defaultValue: '00-001',
    zipTouched: true,
  },
}

export const Invalid = {
  args: {
    country: 'United Kingdom',
    isValid: false,
    errorMessage: 'Ensure your ZIP code is correct',
    defaultValue: '10001',
    zipTouched: true,
  },
}
