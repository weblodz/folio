import PropTypes from 'prop-types'
import { useRef } from 'react'
import styles from './videoBG.module.scss'

export function VideoBG({ isBgPlaying }) {
  const videoRef = useRef(null)

  if (videoRef.current) {
    if (isBgPlaying) {
      videoRef.current.play().catch((err) => console.log(err))
    } else {
      videoRef.current.pause()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <video ref={videoRef} className={styles.video} autoPlay={true} muted={true} loop={true}>
          <source src="src/assets/videos/top_topbanner_01_pc.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

VideoBG.propTypes = {
  isBgPlaying: PropTypes.bool.isRequired,
}
