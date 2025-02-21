import CountryInput from '@components/UiKit/FormInputs/CountryInput'

export default {
  title: 'CountryInput',
  component: CountryInput,
  argTypes: {
    defaultValue: {
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
  },
}

export const Default = {
  args: {
    defaultValue: 'Poland',
  },
}

export const UKSelected = {
  args: {
    defaultValue: 'United Kingdom',
  },
}
