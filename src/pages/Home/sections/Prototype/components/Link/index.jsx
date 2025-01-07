import { Link } from 'react-router-dom'
import ArrowRightButton from '@components/UiKit/buttons/ArrowRight/index'
import styles from './link.module.scss'

export default function PrototypeLink() {
  return (
    <div className={styles.pageLink}>
      <Link to="/prototype">
        <div className={styles.pageLinkContainer}>
          <ArrowRightButton
            className={styles.icon}
            icon={styles.iconContainer}
            fill={'var(--common-color-bg-inverse-primary)'}
            size={'20'}
          />
          <p className={styles.pageLinkText}>EXPLORE PROTOTYPE</p>
        </div>
      </Link>
    </div>
  )
}
