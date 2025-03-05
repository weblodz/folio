import CityInput from '@components/UiKit/FormInputs/CityInput'

export default {
  title: 'CityInput',
  component: CityInput,
  argTypes: {
    country: {
      control: 'radio',
      options: ['Poland', 'United Kingdom'],
    },
    defaultValue: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    cityTouched: {
      control: 'boolean',
    },
    setCity: { action: 'setCity' },
  },
}

export const EmptyValid = {
  args: {
    country: 'Poland',
    defaultValue: '',
    errorMessage: 'Select your city',
    cityTouched: false,
  },
}

export const EmptyInvalid = {
  args: {
    country: 'Poland',
    defaultValue: '',
    errorMessage: 'Select your city',
    cityTouched: true,
  },
}

export const OpenedDropdown = {
  args: {
    country: 'Poland',
    defaultValue: '',
    cityTouched: false,
    openDropdown: true,
  },
}
