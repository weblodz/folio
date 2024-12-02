import HeroSection from '@pages/Home/components/HeroSection/index.jsx'
import PrototypeSection from '@pages/Home/components/PrototypeSection/index.jsx'
import UpdatesSection from '@pages/Home/components/UpdatesSection/index.jsx'
import DiscoverSection from '@pages/Home/components/DiscoverSection/index.jsx'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <PrototypeSection />
      <UpdatesSection />
      <DiscoverSection />
    </div>
  )
}
