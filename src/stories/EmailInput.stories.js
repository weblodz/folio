import EmailInput from '@components/UiKit/FormInputs/EmailInput'

export default {
  title: 'EmailInput',
  component: EmailInput,
}

export const EmptyValid = {
  args: {
    isValid: true,
    errorMessage: "",
    defaultValue: "",
  }
}

export const EmptyInvalid = {
  args: {
    isValid: false,
    errorMessage: "This field is required",
    defaultValue: "",
  }
}


export const withValidEmail = {
  args: {
    isValid: true,
    errorMessage: "",
    defaultValue: "validemail@host.com",
  }
}

export const withInvalidEmail = {
  args: {
    isValid: false,
    errorMessage: "Your email is invalid",
    defaultValue: "invalidemailhost.com",
  }
}
