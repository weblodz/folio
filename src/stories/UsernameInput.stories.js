import UsernameInput from '@components/UiKit/FormInputs/UsernameInput'

export default {
  title: 'FormInputs/UsernameInput',
  component: UsernameInput,
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
    errorMessage: "Enter your username",
    isValid: false
  }
}

export const withValidUsername = {
  args: {
    value: "kiwi123",
    errorMessage: "",
    isValid: true
  }
}
