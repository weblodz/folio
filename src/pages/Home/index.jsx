import Hero from '@pages/Home/sections/Hero'
import Prototype from '@pages/Home/sections/Prototype'
import Updates from '@pages/Home/sections/Updates'
import Discover from '@pages/Home/sections/Discover'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Prototype />
      <Updates />
      <Discover />
    </div>
  )
}
