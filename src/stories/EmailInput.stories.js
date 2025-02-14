import EmailInput from '@components/UiKit/FormInputs/EmailInput/index.jsx'


export default {
  title: 'EmailInput',
  component: EmailInput,
}

export const EmptyValid = {
  args: {
    isValid: true,
    errorMessage: "",
    value: "",
  }
}

export const EmptyInvalid = {
  args: {
    isValid: false,
    errorMessage: "This field is required",
    value: "",
  }
}


export const withValidEmail = {
  args: {
    isValid: true,
    errorMessage: "",
    value: "validemail@host.com",
  }
}

export const withInvalidEmail = {
  args: {
    isValid: false,
    errorMessage: "Your email is invalid",
    value: "invalidemailhost.com",
  }
}
