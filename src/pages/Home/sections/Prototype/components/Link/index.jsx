import { Link } from 'react-router-dom'
import ArrowRightButton from '@components/UiKit/buttons/ArrowRight'
import styles from './link.module.scss'

export default function PrototypeLink() {
  return (
    <div className={styles.container}>
      <Link to="/prototype" className={styles.link}>
        <div className={styles.content}>
          <ArrowRightButton
            className={styles.arrow}
            icon={styles.icon}
            fill={'var(--common-color-bg-inverse-primary)'}
            size={'20'}
          />
          <p className={styles.text}>EXPLORE PROTOTYPE</p>
        </div>
      </Link>
    </div>
  )
}
