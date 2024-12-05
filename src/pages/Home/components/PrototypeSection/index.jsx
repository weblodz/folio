import { useRef, useState, useEffect } from 'react'
import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
import prototypeImage from '@assets/prototype/prototype.jpg'
import prototypeVideo from '@assets/prototype/video.mp4'
import prototypeSmallVideo from '@assets/prototype/proto_small.mp4'
import Content from './Components/Content/index.jsx'
import Link from './Components/Link/index.jsx'
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
    const largeVideo = document.querySelector(`.${styles.largeScreenVideo}`)
    const smallVideo = document.querySelector(`.${styles.smallScreenVideo}`)
    const videos = [largeVideo, smallVideo]

    videos.forEach((video) => {
      if (video) {
        if (window.scrollY > document.documentElement.scrollHeight / 4.5) {
          video.style.opacity = '0.3'
          setIsLinkShown(true)
        } else {
          video.style.opacity = '1'
          setIsLinkShown(false)
        }
      }
    })
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
    const currentVideo = videoRef.current
    const currentSection = sectionRef.current

    setTarget(currentSection)

    if (currentVideo) {
      currentVideo.addEventListener('canplay', handleVideoReady)
      currentVideo.load()
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener('canplay', handleVideoReady)
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
        className={`${styles.backgroundVideo} ${styles.largeScreenVideo} ${isVideoPlaying ? styles.videoVisible : styles.videoHidden}`}
      >
        <source src={prototypeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`${styles.backgroundVideo} ${styles.smallScreenVideo} ${isVideoPlaying ? styles.videoVisible : styles.videoHidden}`}
      >
        <source src={prototypeSmallVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.container}>
        <Content />
        {isLinkShown && <Link />}
      </div>
    </div>
  )
}
