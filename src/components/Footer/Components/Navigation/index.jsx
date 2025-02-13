import { useTranslation } from 'react-i18next'
import LINKS from './links'
import styles from './navigation.module.scss'

function Navigation() {
  const { t } = useTranslation('nsCommon')

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {LINKS.map((item) => (
          <li key={item.name} className={styles.item}>
            <a className={styles.link} href={item.path}>
              {t(item.name)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation
