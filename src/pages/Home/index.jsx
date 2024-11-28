import styles from './home.module.scss'
import HeroSection from '@pages/Home/components/HeroSection/index.jsx'
import PrototypeSection from '@pages/Home/components/PrototypeSection/index.jsx'
import UpdatesSection from '@pages/Home/components/UpdatesSection/index.jsx'
import DiscoverSection from '@pages/Home/components/DiscoverSection/index.jsx'
import { useState } from 'react'
import { ModalPlayer } from '@pages/Home/components/modalPlayer/index.jsx'

export default function Home() {
  const [isModalPlayerShown, setModalPlayerShown] = useState(false)

  return (
    <div className={styles.container}>
      <HeroSection setModalPlayerShown={setModalPlayerShown} />
      <PrototypeSection />
      <UpdatesSection />
      <DiscoverSection />
      {isModalPlayerShown && <ModalPlayer setModalPlayerShown={setModalPlayerShown} />}
    </div>
  )
}
