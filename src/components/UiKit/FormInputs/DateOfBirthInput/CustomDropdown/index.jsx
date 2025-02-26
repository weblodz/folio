import { useState, useRef, useEffect, useCallback } from 'react'
import T from 'prop-types'
import Icon from '/src/assets/arrowIcon/arrow.svg'
import cls from 'classnames'
import styles from './dropdown.module.scss'

export default function CustomDropdown({ label, options, selected, onSelect, onBlur }) {
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
    setIsOpen(false)
    onBlur?.()
  }, [onBlur])

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
    <div className={cls(styles.select_wrapper, { [styles.active_border]: isOpen })} ref={dropdownRef}>
      <label className={cls(styles.floating_label, { [styles.floating]: selected })}>
        {label}
      </label>
      <div className={cls(styles.select, { [styles.open]: isOpen })} onClick={toggleDropdown}>
        {selected}
        <span className={styles.arrow_container}>
          <img className={styles.arrow} src={Icon} alt="arrow button" />
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
}
