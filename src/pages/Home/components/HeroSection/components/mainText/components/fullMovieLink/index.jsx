import styles from './fullMovieLink.module.scss'
import PropTypes from 'prop-types'

export function FullMovieLink({ setModalPlayerShown }) {
  return (
    <div className={styles.linkContainer}>
      <a className={styles.fullMovieLink} onClick={() => setModalPlayerShown(true)}>
        <span className={styles.linkIconContainer}>
          <svg
            className={styles.icon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.iconOutline}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.90038 3.33123C5.65039 3.1849 5.33594 3.36519 5.33594 3.65486V20.3468C5.33594 20.6365 5.65039 20.8168 5.90038 20.6704L20.1581 12.3245C20.4055 12.1796 20.4055 11.822 20.1581 11.6772L5.90038 3.33123ZM18.1128 12.0008L6.64844 5.28995V18.7117L18.1128 12.0008Z"
            ></path>
            <path
              className={styles.iconFill}
              clipRule="evenodd"
              d="M5.90038 3.33123C5.65039 3.1849 5.33594 3.36519 5.33594 3.65486V20.3468C5.33594 20.6365 5.65039 20.8168 5.90038 20.6704L20.1581 12.3245C20.4055 12.1796 20.4055 11.822 20.1581 11.6772L5.90038 3.33123ZM18.1128 12.0008L6.64844 5.28995V18.7117L18.1128 12.0008Z"
            ></path>
          </svg>
        </span>
        <span className={styles.linkText}>Play a full movie</span>
      </a>
    </div>
  )
}

FullMovieLink.propTypes = {
  setModalPlayerShown: PropTypes.func.isRequired,
}
