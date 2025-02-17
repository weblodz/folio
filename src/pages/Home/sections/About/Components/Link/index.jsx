import { Link } from 'react-router-dom'
import ArrowRightButton from '@components/UiKit/buttons/ArrowRight'
import styles from './link.module.scss'

function MoreLink() {
  return (
    <div className={styles.pageLink}>
      <Link to="/about">
        <div className={styles.pageLinkContainer}>
          <span>
            <ArrowRightButton className={styles.icon} isLightTheme={true} size={'20'} />
          </span>
          <p className={styles.pageLinkText}>MORE ABOUT US</p>
        </div>
      </Link>
    </div>
  )
}

export default MoreLink
