import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ArrowRightButton from '@components/UiKit/Buttons/ArrowRight'
import styles from './link.module.scss'

export default function PrototypeLink() {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation('nsHome')

  return (
    <div className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/prototype" className={styles.link}>
        <div className={styles.content}
          >
          <ArrowRightButton
            className={styles.arrow}
            iconClass={styles.icon}
            size={'20'}
            isLightTheme={isHovered ? true : false}
          />
          <p className={styles.text}>{t('explore')}</p>
        </div>
      </Link>
    </div>
  )
}
