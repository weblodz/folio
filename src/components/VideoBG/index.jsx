import T from 'prop-types'
import { useRef } from 'react'
import styles from './videoBG.module.scss'

function VideoBG({ isBgPlaying, src }) {
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
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

VideoBG.propTypes = {
  isBgPlaying: T.bool.isRequired,
  src: T.string.isRequired,
}

export default VideoBG
