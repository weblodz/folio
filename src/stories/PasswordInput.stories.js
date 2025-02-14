import PasswordInput from '@components/UiKit/FormInputs/PasswordInput/index.jsx'

export default {
  title: 'PasswordInput',
  component: PasswordInput,
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

export const withValidPassword = {
  args: {
    isValid: true,
    errorMessage: "",
    defaultValue: "ValidSecurePassword",
  }
}

export const withInvalidPassword = {
  args: {
    isValid: false,
    errorMessage: "Password is invalid",
    defaultValue: "InvalidPassword",
  }
}
