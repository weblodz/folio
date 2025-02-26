import { useState, useRef, useEffect } from "react"
import CustomDropdown from "@components/UiKit/FormInputs/DateOfBirthInput/CustomDropdown"
import YearInput from "@components/UiKit/FormInputs/DateOfBirthInput/YearInput"
import PropTypes from "prop-types"
import styles from "./dateofbirthinput.module.scss"

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const days = Array.from({ length: 31 }, (_, i) => i + 1)

export default function DateOfBirthInput({
  onChange,
  selectedMonth: propMonth = "",
  selectedDay: propDay = "",
  selectedYear: propYear = "",
}) {
  const [selectedMonth, setSelectedMonth] = useState(propMonth)
  const [selectedDay, setSelectedDay] = useState(propDay)
  const [selectedYear, setSelectedYear] = useState(propYear)

  const formRef = useRef(null)

  useEffect(() => {
    setSelectedMonth(propMonth)
    setSelectedDay(propDay)
    setSelectedYear(propYear)
  }, [propMonth, propDay, propYear])

  const handleChange = (type, value) => {
    const updatedMonth = type === "month" ? value : selectedMonth
    const updatedDay = type === "day" ? value : selectedDay
    const updatedYear = type === "year" ? value : selectedYear

    setSelectedMonth(updatedMonth)
    setSelectedDay(updatedDay)
    setSelectedYear(updatedYear)

    if (updatedMonth && updatedDay && updatedYear) {
      const monthIndex = months.indexOf(updatedMonth) + 1
      const formattedDate = `${updatedYear}-${monthIndex.toString().padStart(2, "0")}-${updatedDay.toString().padStart(2, "0")}`

      onChange?.(formattedDate)
    }
  }

  return (
    <div className={styles.birth_container}>
      <div className={styles.container} ref={formRef}>
        <CustomDropdown
          label="Month"
          options={months}
          selected={selectedMonth}
          onSelect={(value) => handleChange("month", value)}
        />

        <CustomDropdown
          label="Day"
          options={days}
          selected={selectedDay}
          onSelect={(value) => handleChange("day", value)}
        />

        <YearInput
          label="Year"
          selected={selectedYear}
          onChange={(value) => handleChange("year", value)}
        />
      </div>
    </div>
  )
}

DateOfBirthInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedMonth: PropTypes.string,
  selectedDay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedYear: PropTypes.string,
}
