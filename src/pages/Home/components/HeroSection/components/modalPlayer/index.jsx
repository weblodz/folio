import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { CloseButton } from './components/closeButton/index.jsx'
import styles from './modalPlayer.module.scss'

export function ModalPlayer({ isShown, setShown }) {
  useEffect(() => {
    if (isShown) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isShown])

  if (!isShown) {
    return null
  }

  return ReactDOM.createPortal(
    <div
      className={styles.container}
      onClick={() => {
        setShown(false)
      }}
    >
      <div className={styles.videoOuterContainer}>
        <div className={styles.videoInnerContainer}>
          <iframe
            className={styles.video}
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/4Oj_fenobDw?enablejsapi=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
      <CloseButton setModalShown={setShown} />
    </div>,
    document.body,
  )
}

ModalPlayer.propTypes = {
  setShown: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
}
