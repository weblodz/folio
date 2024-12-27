import { Link } from 'react-router-dom'
import ArrowRightIcon from '@components/UiKit/Icons/ArrowRight/index.jsx'
import styles from './link.module.scss'

export default function PrototypeLink() {
  return (
    <div className={styles.pageLink}>
      <Link to="/prototype">
        <div className={styles.pageLinkContainer}>
          <span data-type="icon">
            <ArrowRightIcon
              className={styles.icon}
              fill={'var(--common-color-bg-inverse-primary)'}
              height={'10'}
              width={'18'}
              viewBox={'0 0 18 10'}
            />
          </span>
          <p className={styles.pageLinkText}>EXPLORE PROTOTYPE</p>
        </div>
      </Link>
    </div>
  )
}
