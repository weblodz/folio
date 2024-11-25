import { useRef, useState, useEffect } from 'react'
import Content from './Components/Content/Content'
import Link from './Components/Link/Link'
import prototypeImage from '@assets/prototype/prototype.jpg'
import prototypeVideo from '@assets/prototype/video.mp4'
import styles from './prototype.module.scss'

export default function PrototypeSection() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  const [isFallbackImageVisible, setIsFallbackImageVisible] = useState(true)

  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const currentVideo = videoRef.current
    const currentSection = sectionRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (currentVideo) {
            currentVideo.addEventListener('canplay', handleVideoReady)
            currentVideo.load()
          }
        }
      },
      { threshold: 0.9 },
    )

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener('canplay', handleVideoReady)
      }

      if (currentSection) {
        observer.disconnect()
      }
    }
  }, [])

  const handleVideoReady = () => {
    setIsFallbackImageVisible(false)

    setIsVideoPlaying(true)
  }

  return (
    <div
      className={styles.prototypePage}
      ref={sectionRef}
      style={{
        background: isFallbackImageVisible ? `url(${prototypeImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
        style={{
          opacity: isVideoPlaying ? 1 : 0,
        }}
      >
        <source src={prototypeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.container}>
        <Content />
        <Link />
      </div>
    </div>
  )
}
