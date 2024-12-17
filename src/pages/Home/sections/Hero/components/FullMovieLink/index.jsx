import { useState } from 'react'
import VideoModal from '@components/Modals/VideoModal'
import { MovieIcon } from 'src/components/UiKit/Icons/Movie'
import styles from './fullMovieLink.module.scss'

export default function FullMovieLink() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.linkContainer}>
      <a className={styles.fullMovieLink} onClick={() => setIsModalOpen(true)}>
        <span className={styles.linkIconContainer}>
          <MovieIcon />
        </span>
        <span className={styles.linkText}>PLAY A FULL MOVIE</span>
      </a>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoLink="https://www.youtube.com/embed/4Oj_fenobDw?enablejsapi=1"
      />
    </div>
  )
}
