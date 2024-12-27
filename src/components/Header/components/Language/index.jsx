import { useState } from 'react'
import T from 'prop-types'
import cls from 'classnames'
import LanguageIcon from '@components/UiKit/Icons/Language/index.jsx'
import styles from './language.module.scss'

const LANGUAGES = {
  english: 'en',
  polish: 'pl',
}

function Language({ isHovered }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.english)

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <div className={styles.icon}>
      <button className={styles.lang} type="button" onClick={toggleDropdown}>
        <LanguageIcon />
      </button>

      <div className={cls(styles.buttons_container, { [styles.hovered]: isHovered && isDropdownVisible })}>
        <div className={styles.language_nav}>
          {isDropdownVisible && (
            <ul className={styles.language_list}>
              <li className={styles.language_item}>
                <button
                  className={cls(styles.language_button, { [styles.active]: currentLanguage === LANGUAGES.english })}
                  onClick={() => setCurrentLanguage(LANGUAGES.english)}
                >
                  English
                </button>
              </li>
              <li className={styles.language_item}>
                <button
                  className={cls(styles.language_button, { [styles.active]: currentLanguage === LANGUAGES.polish })}
                  onClick={() => setCurrentLanguage(LANGUAGES.polish)}
                >
                  Polish
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Language

Language.propTypes = {
  isHovered: T.bool,
}
