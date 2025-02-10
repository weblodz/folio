import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import VideoModal from '@components/Modals/VideoModal'
import { MovieIcon } from '@components/UiKit/Icons/Movie'
import styles from './fullMovieLink.module.scss'

export default function FullMovieLink() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useTranslation('nsHero')

  const onClose = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <div className={styles.linkContainer}>
      <a className={styles.fullMovieLink} onClick={() => setIsModalOpen(true)}>
        <span className={styles.linkIconContainer}>
          <MovieIcon styles={styles} className={styles.icon} />
        </span>
        <span className={styles.linkText}>{t("playFullMovie")}</span>
      </a>
      <VideoModal
        isOpen={isModalOpen}
        onClose={onClose}
        videoLink="https://www.youtube.com/embed/4Oj_fenobDw?enablejsapi=1"
      />
    </div>
  )
}
