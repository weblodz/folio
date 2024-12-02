import { useRef, useState, useEffect } from 'react'
import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
import prototypeImage from '@assets/prototype/prototype.jpg'
import prototypeVideo from '@assets/prototype/video.mp4'
import Content from './Components/Content/Content'
import Link from './Components/Link/Link'
import styles from './prototype.module.scss'

export default function PrototypeSection() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  const [isFallbackImageVisible, setIsFallbackImageVisible] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isLinkShown, setIsLinkShown] = useState(false)

  const handleVideoReady = () => {
    setIsFallbackImageVisible(false)
    setIsVideoPlaying(true)
  }

  function handleVideoOpacity() {
    if (videoRef.current) {
      if (window.scrollY > document.documentElement.scrollHeight / 4.5) {
        videoRef.current.style.opacity = '0.3'
        setIsLinkShown(true)
      } else {
        videoRef.current.style.opacity = '1'
        setIsLinkShown(false)
      }
    }
  }

  const { setTarget } = useIntersectionObserver({ threshold: 0.9 }, ([entry]) => {
    if (entry.isIntersecting) {
      if (videoRef.current) {
        videoRef.current.addEventListener('canplay', handleVideoReady)
        videoRef.current.load()
      }
    }
  })

  useEffect(() => {
    setTarget(sectionRef.current)

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplay', handleVideoReady)
      }
    }
  }, [setTarget])

  useEffect(() => {
    const handleScroll = () => handleVideoOpacity()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`${styles.prototypePage} ${
        isFallbackImageVisible ? `url(${prototypeImage})` : styles.blackBackground
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`${styles.backgroundVideo} ${isVideoPlaying ? styles.videoVisible : styles.videoHidden}`}
      >
        <source src={prototypeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.container}>
        <Content />
        {isLinkShown && <Link />}
      </div>
    </div>
  )
}
