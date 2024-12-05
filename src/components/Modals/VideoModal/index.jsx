import { useEffect } from 'react'
import T from 'prop-types'
import { createPortal } from 'react-dom'
import Button from './components/CloseButton'
import styles from './modal.module.scss'

const VIDEO_LINK = "https://www.youtube.com/embed/4Oj_fenobDw?enablejsapi=1"

function Modal( {isOpen, onClose, videoLink = VIDEO_LINK} ) {
  let elementModal = document.getElementById('video-modal')

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27){
        onClose()
      }
    }

    window.addEventListener('keydown', close)

    return () => window.removeEventListener('keydown', close)
  }, [])

  if (elementModal === null) return null

  return isOpen && createPortal (
    <div className={styles.container} onClick={onClose}>
      <Button onClose={onClose} />
      <div className={styles.section_container}>
        <iframe
          className={styles.video}
          width="1280"
          height="720"
          src={videoLink}
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
