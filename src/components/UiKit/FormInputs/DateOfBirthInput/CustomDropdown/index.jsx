import { useState, useRef, useEffect, useCallback } from 'react'
import T from 'prop-types'
import { SlArrowUp, SlArrowDown } from 'react-icons/sl'
import cls from 'classnames'
import styles from './dropdown.module.scss'

export default function CustomDropdown({ label, options, selected, onSelect, onBlur, hasError }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelect = (option) => {
    onSelect(option)
    setIsOpen(false)
  }

  const handleBlur = useCallback(() => {
    if (isOpen) {
      setIsOpen(false)
      onBlur()
    }
  }, [isOpen, onBlur])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        handleBlur()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleBlur])

  return (
    <div
      className={cls(styles.select_wrapper, {
        [styles.active_border]: isOpen,
        [styles.error]: hasError,
      })}
      ref={dropdownRef}
    >
      <label className={cls(styles.floating_label, { [styles.floating]: selected })}>
        {label}
      </label>

      <div className={cls(styles.select, { [styles.open]: isOpen })} onClick={toggleDropdown}>
        {selected}
        <span className={styles.arrow_container}>
          {isOpen ? (
            <SlArrowUp className={styles.arrow} />
          ) : (
            <SlArrowDown className={styles.arrow} />
          )}
        </span>
      </div>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              key={option}
              className={cls(styles.option, { [styles.selected]: option === selected })}
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
  label: T.string.isRequired,
  options: T.array.isRequired,
  selected: T.oneOfType([T.string, T.number]),
  onSelect: T.func.isRequired,
  onBlur: T.func,
  hasError: T.oneOfType([T.string, T.bool]),
}
