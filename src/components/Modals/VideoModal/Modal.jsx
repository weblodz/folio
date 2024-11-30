import T from 'prop-types'
import { createPortal } from 'react-dom'
import styles from './modal.module.scss'

function Modal({ isOpen, onClose, videoLink }) {
  let elementModal = document.getElementById('video-modal')

  if (elementModal === null) return null

  return isOpen && createPortal (
    <div className={styles.container}>
      <div className={styles.section_container}>
        <iframe
          className={styles.video}
          width="1280"
          height="720"
          src={videoLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
      </div>
    </div>,
    elementModal
  )
}

export default Modal

Modal.propTypes = {
  isOpen: T.bool,
  onClose: T.func,
  videoLink: T.string,
}
