import { Link } from 'react-router-dom'
import PrototypeIcon from '@components/UiKit/Icons/Prototype/index.jsx'
import styles from './link.module.scss'

export default function PrototypeLink() {
  return (
    <div className={styles.pageLink}>
      <Link to="/prototype">
        <div className={styles.pageLinkContainer}>
          <span data-type="icon">
            <PrototypeIcon />
          </span>
          <p className={styles.pageLinkText}>EXPLORE PROTOTYPE</p>
        </div>
      </Link>
    </div>
  )
}
