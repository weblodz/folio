import PropTypes from 'prop-types'
import styles from './closeButton.module.scss'

export function CloseButton({ setModalShown }) {
  function closeVideo() {
    setModalShown(false)
  }

  return (
    <button className={styles.closeButtonContainer} onClick={closeVideo}>
      <svg
        className={styles.closeButton}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.37986 10.6638V19.1057H10.7078V10.6638H19.1484V9.33591H10.7078V0.894043H9.37986V9.33591H0.937988V10.6638H9.37986Z"
        ></path>
      </svg>
    </button>
  )
}

CloseButton.propTypes = {
  setModalShown: PropTypes.func.isRequired,
}
