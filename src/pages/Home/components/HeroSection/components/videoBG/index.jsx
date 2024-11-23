import styles from './videoBG.module.scss'

export function VideoBG({ isBgPlaying }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <video className={styles.video} autoPlay={isBgPlaying} muted={true}>
          <source src="src/assets/videos/top_topbanner_01_pc.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
