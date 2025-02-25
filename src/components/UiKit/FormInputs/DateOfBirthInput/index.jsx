import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./dateofbirthinput.module.scss"

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const days = Array.from({ length: 31 }, (_, i) => i + 1)

export default function DateOfBirthInput({
  onChange,
  selectedMonth: propMonth,
  selectedDay: propDay,
  selectedYear: propYear,
  error: propError,
  isInteracting: propInteracting,
}) {
  const [selectedMonth, setSelectedMonth] = useState(propMonth || "")
  const [selectedDay, setSelectedDay] = useState(propDay || "")
  const [selectedYear, setSelectedYear] = useState(propYear || "")
  const [error, setError] = useState(propError || false)
  const [isInteracting, setIsInteracting] = useState(propInteracting || false)

  const formRef = useRef(null)

  useEffect(() => {
    setSelectedMonth(propMonth || "")
    setSelectedDay(propDay || "")
    setSelectedYear(propYear || "")
    setError(propError || false)
    setIsInteracting(propInteracting || false)
  }, [propMonth, propDay, propYear, propError, propInteracting])

  const handleChange = (type, value) => {
    if (type === "month") setSelectedMonth(value)
    if (type === "day") setSelectedDay(value)
    if (type === "year") setSelectedYear(value)

    if (selectedMonth && selectedDay && (type === "year" ? value : selectedYear)) {
      setError(false)
      const monthIndex = months.indexOf(type === "month" ? value : selectedMonth) + 1
      const day = type === "day" ? value : selectedDay
      const year = type === "year" ? value : selectedYear
      const formattedDate = `${year}-${monthIndex.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`

      onChange && onChange(formattedDate)
    }
  }

  const handleBlur = (e) => {
    if (!formRef.current.contains(e.relatedTarget)) {
      if (!selectedMonth || !selectedDay || !selectedYear) {
        setError(true)
      }
      setIsInteracting(false)
    }
  }

  const handleInteractionStart = () => {
    setIsInteracting(true)
  }

  const handleInteractionEnd = () => {
    setIsInteracting(false)
  }

  return (
    <div className={styles.birth_container}>
      <div
        className={`${styles.container} ${
          error && !isInteracting ? styles.error_border : ""
        }`}
        onBlur={handleBlur}
        tabIndex={-1}
        ref={formRef}
      >
        <CustomDropdown
          label="Month"
          options={months}
          selected={selectedMonth}
          onSelect={(value) => handleChange("month", value)}
          onOpen={handleInteractionStart}
          onClose={handleInteractionEnd}
        />

        <CustomDropdown
          label="Day"
          options={days}
          selected={selectedDay}
          onSelect={(value) => handleChange("day", value)}
          onOpen={handleInteractionStart}
          onClose={handleInteractionEnd}
        />

        <YearInput
          label="Year"
          selected={selectedYear}
          onChange={(value) => handleChange("year", value)}
          onFocus={handleInteractionStart}
          onBlur={handleInteractionEnd}
        />
      </div>

      {error && !isInteracting && (
        <p className={styles.error_message}>Enter your date of birth</p>
      )}
    </div>
  )
}

DateOfBirthInput.propTypes = {
  onChange: PropTypes.func,
  selectedMonth: PropTypes.string,
  selectedDay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedYear: PropTypes.string,
  error: PropTypes.bool,
  isInteracting: PropTypes.bool,
}

function CustomDropdown({ label, options, selected, onSelect, onOpen, onClose }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    const newState = !isOpen

    setIsOpen(newState)
    newState ? onOpen() : onClose()
  }

  const handleSelect = (option) => {
    onSelect(option)
    setIsOpen(false)
    onClose()
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  return (
    <div className={styles.select_wrapper} ref={dropdownRef}>
      <label className={`${styles.floating_label} ${selected ? styles.floating : ""}`}>
        {label}
      </label>
      <div
        className={`${styles.select} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        {selected}
        <span className={styles.arrow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 64 64" aria-hidden="true">
            <path fill="#000" d="m55 22.828-21.379 21.38c-.8.8-2.098.8-2.899 0L9.343 22.827 12.172 20l20 20 20-20z"></path>
          </svg>
        </span>
      </div>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              key={option}
              className={`${styles.option} ${option === selected ? styles.selected : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

CustomDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

function YearInput({ label, selected, onChange, onFocus, onBlur }) {
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value

    if (/^\d{0,4}$/.test(value)) {
      onChange(value)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
    onFocus()
  }

  const handleBlur = () => {
    if (!selected) setIsFocused(false)
    onBlur()
  }

  return (
    <div className={styles.select_wrapper}>
      <label
        className={`${styles.floating_label} ${
          selected || isFocused ? styles.floating : ""
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        className={styles.input}
        value={selected}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

YearInput.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}
