import { Link } from 'react-router-dom'
import ArrowRightIcon from '@components/UiKit/Icons/ArrowRight'
import styles from './link.module.scss'

function MoreLink() {
  return (
    <div className={styles.pageLink}>
      <Link to="/about">
        <div className={styles.pageLinkContainer}>
          <span data-type="icon">
            <ArrowRightIcon className={styles.icon} fill={'var(--common-color-bg-inverse-primary)'} size={'20'} />
          </span>
          <p className={styles.pageLinkText}>MORE ABOUT US</p>
        </div>
      </Link>
    </div>
  )
}

export default MoreLink
