import styles from './default.module.scss'
import Modal from '@components/Modals/VideoModals/Modal'
import { useState } from 'react'

export default function Default() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <a className={styles.modal} href='"https://www.youtube.com/embed/4Oj_fenobDw?enablejsapi=1"' onClick={() => {
          setOpenModal(true)
        }}>
          Open Modal Button
        </a>
        <div className={styles.result}>
          {openModal && <Modal />}
        </div>

      </div>
      <div>Title</div>
      <div>Content</div>
    </div>
  )
}
