import NameInput from '@components/UiKit/FormInputs/NameInput'

export default {
  title: 'FormInputs/NameInput',
  component: NameInput,
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
    errorMessage: "Enter your first name",
    isValid: false
  }
}

export const withValidName = {
  args: {
    value: "Anna",
    errorMessage: "",
    isValid: true
  }
}

export const withInvalidName = {
  args: {
    value: "Anna123",
    errorMessage: "Unsupported characters detected",
    isValid: false
  }
}
