import styles from './default.module.scss'
import Modal from '@components/Modals/VideoModal/Modal'
import { useState } from 'react'

export default function Default() {
  const [openModal, setOpenModal] = useState(false)
  const VIDEO_LINK = 'https://www.youtube.com/embed/4Oj_fenobDw?enablejsapi=1'

  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <div className={styles.modal} onClick={() => {
          setOpenModal(true)
        }}>
          Open Modal Button
        </div>
        <div className={styles.result}>
          <Modal isOpen = {openModal} videoLink={VIDEO_LINK} onClose={() => setOpenModal(false)} />
        </div>

      </div>
      <div>Title</div>
      <div>Content</div>
    </div>
  )
}
