import { useState } from 'react'
import langIcon from '/src/assets/header/language.svg'
import styles from './language.module.scss'

function Language() {

  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <div className={styles.icon}>
      <button className={styles.lang} type="button" onClick={toggleDropdown}>
        <img src={langIcon} alt="language" />
      </button>

      {isDropdownVisible && (
      <ul className={styles.langButtons}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            English
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Polish
          </a>
        </li>
      </ul>
      )}
    </div>
  )
}

export default Language
