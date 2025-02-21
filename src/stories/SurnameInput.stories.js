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
  },
}

export const EmptyValid = {
  args: {
    value: "",
    errorMessage: ""
  }
}

export const EmptyInvalid = {
  args: {
    value: "",
    errorMessage: "Enter your last name"
  }
}

export const withValidSurname = {
  args: {
    value: "Smith",
    errorMessage: ""
  }
}

export const withInvalidSurname = {
  args: {
    value: "Smith123",
    errorMessage: "Unsupported characters detected"
  }
}
