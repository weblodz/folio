import styles from './modalPlayer.module.scss'
import { CloseButton } from './components/closeButton/index.jsx'
import PropTypes from 'prop-types'

export function ModalPlayer({ setModalPlayerShown }) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        setModalPlayerShown(false)
      }}
    >
      <div className={styles.videoOuterContainer}>
        <div className={styles.videoInnerContainer}>
          <iframe
            className={styles.video}
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/4Oj_fenobDw?enablejsapi=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
      <CloseButton setModalPlayerShown={setModalPlayerShown} />
    </div>
  )
}

ModalPlayer.propTypes = {
  setModalPlayerShown: PropTypes.func.isRequired,
}
