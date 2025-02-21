import CityInput from '@components/UiKit/FormInputs/CityInput'

export default {
  title: 'CityInput',
  component: CityInput,
  argTypes: {
    defaultValue: {
      control: 'text',
    },
    defaultOpen: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
    },
    errorMessage: {
      control: 'text',
    },
    cityTouched: {
      control: 'boolean',
    },
  },
}

export const EmptyValid = {
  args: {
    defaultValue: '',
    errorMessage: 'Select your city',
    cityTouched: false,
  },
}

export const EmptyInvalid = {
  args: {
    defaultValue: '',
    errorMessage: 'Select your city',
    cityTouched: true,
  },
}

export const OpenedDropdown = {
  args: {
    defaultValue: '',
    defaultOpen: true,
  },
}
