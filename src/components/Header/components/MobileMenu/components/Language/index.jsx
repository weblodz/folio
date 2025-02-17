import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'
import LanguageIcon from '@components/UiKit/Icons/Language'
import { useTranslation } from 'react-i18next'
import styles from './language.module.scss'

const LANGUAGES = {
  english: 'en',
  polish: 'pl',
}

function Language({ isHovered }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const { t, i18n } = useTranslation("nsCommon")

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.icon}`)) {
        setDropdownVisible(false)
      }
    }

    if (isDropdownVisible) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isDropdownVisible])

  const toggleDropdown = (e) => {
    e.stopPropagation()
    setDropdownVisible((prev) => !prev)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      setDropdownVisible(false)
    }).catch(console.error)
  }

  return (
    <div className={styles.icon}>
      <button className={styles.lang} type="button" onClick={toggleDropdown}>
        <LanguageIcon fill="var(--common-color-bg-inverse-primary)" />
        <span className={styles.languageText}>
          {i18n.language === LANGUAGES.english ? "United States - English" : "Polska - Polski"}
        </span>
      </button>

      {isDropdownVisible && (
        <div className={cls(styles.buttons_container, { [styles.hovered]: isHovered })} onClick={(e) => e.stopPropagation()}>
          <div className={styles.language_nav}>
            <ul className={styles.language_list}>
              <li className={styles.language_item}>
                <button
                  className={cls(styles.language_button, { [styles.active]: i18n.language === LANGUAGES.english })}
                  onClick={() => changeLanguage(LANGUAGES.english)}
                >
                  {t("english")}
                </button>
              </li>
              <li className={styles.language_item}>
                <button
                  className={cls(styles.language_button, { [styles.active]: i18n.language === LANGUAGES.polish })}
                  onClick={() => changeLanguage(LANGUAGES.polish)}
                >
                  {t("polish")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

Language.propTypes = {
  isHovered: PropTypes.bool,
}

export default Language
