import FormButton from '@components/UiKit/Buttons/FormButton/'

export default {
  title: 'FormButton',
  component: FormButton

}

export const Active = {
  args: {
    text: "Log IN",
    isActive: true,
    isLoading: false,
    onClick: () => {}
  }
}

export const NotActive = {
  args: {
    text: "Log In",
    isActive: false,
    isLoading: false,
    onClick: () => {}
  }
}

export const Loading = {
  args: {
    text: "Log In",
    isActive: true,
    isLoading: true,
    onClick: () => {}
  }
}
