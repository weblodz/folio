import { useState } from 'react'
import T from 'prop-types'
import cls from 'classnames'
import LanguageIcon from '@components/UiKit/Icons/Language/index.jsx'
import { useTranslation } from "react-i18next"
import styles from './language.module.scss'

const LANGUAGES = {
  english: 'en',
  polish: 'pl',
}

function Language({ isHovered }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
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
                  className={cls(styles.language_button, { [styles.active]: i18n.language === LANGUAGES.english })}
                  onClick={() => changeLanguage(LANGUAGES.english)}
                >
                  {t("header.english")}
                </button>
              </li>
              <li className={styles.language_item}>
                <button
                  className={cls(styles.language_button, { [styles.active]: i18n.language === LANGUAGES.polish })}
                  onClick={() => changeLanguage(LANGUAGES.polish)}
                >
                  {t("header.polish")}
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
