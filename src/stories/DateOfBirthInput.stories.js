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
    error: { control: "boolean" },
    isInteracting: { control: "boolean" },
  }
}

export const Default = {
  args: {
    selectedMonth: "",
    selectedDay: "",
    selectedYear: "",
    error: false,
    isInteracting: false,
  },
}

export const WithError = {
  args: {
    selectedMonth: "",
    selectedDay: "",
    selectedYear: "",
    error: true,
    isInteracting: false,
  }
}

export const Filled = {
  args: {
    selectedMonth: "March",
    selectedDay: 15,
    selectedYear: "2000",
    error: false,
    isInteracting: false,
  }
}
