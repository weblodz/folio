import DateOfBirthInput from "@components/UiKit/FormInputs/DateOfBirthInput"

export default {
  title: "FormInputs/DateOfBirthInput",
  component: DateOfBirthInput,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    selectedMonth: { control: "text" },
    selectedDay: { control: "number" },
    selectedYear: { control: "text" },
    hasError: { control: "boolean" },
  },
}

export const Default = {
  args: {
    selectedMonth: "",
    selectedDay: "",
    selectedYear: "",
    hasError: false,
  },
}

export const WithError = {
  args: {
    selectedMonth: "",
    selectedDay: "",
    selectedYear: "",
    showErrors: true,
  },
}

export const Filled = {
  args: {
    selectedMonth: "March",
    selectedDay: 15,
    selectedYear: "2000",
    hasError: false,
  },
}
