import CountryInput from '@components/UiKit/FormInputs/CountryInput'

export default {
  title: 'Components/CountryInput',
  component: CountryInput,
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default selected country',
    },
    onChange: {
      action: 'changed',
      description: 'Triggered when a new country is selected',
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
