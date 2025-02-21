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
    errorMessage: "Enter your first name"
  }
}

export const withValidName = {
  args: {
    value: "Anna",
    errorMessage: ""
  }
}

export const withInvalidName = {
  args: {
    value: "Anna123",
    errorMessage: "Unsupported characters detected"
  }
}
