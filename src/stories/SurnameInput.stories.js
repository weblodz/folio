import SurnameInput from '@components/UiKit/FormInputs/SurnameInput'

export default {
  title: 'FormInputs/SurnameInput',
  component: SurnameInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    value: { control: 'text' },
    errorMessage: { control: 'text' },
    isValid: {control: 'boolean'}
  },
}

export const EmptyValid = {
  args: {
    value: "",
    errorMessage: "",
    isValid: true
  }
}

export const EmptyInvalid = {
  args: {
    value: "",
    errorMessage: "Enter your last name",
    isValid: false
  }
}

export const withValidSurname = {
  args: {
    value: "Smith",
    errorMessage: "",
    isValid: true
  }
}

export const withInvalidSurname = {
  args: {
    value: "Smith123",
    errorMessage: "Unsupported characters detected",
    isValid: false
  }
}
