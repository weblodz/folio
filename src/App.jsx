import Header from '@components/Header'
import Footer from '@components/Footer'
import Home from '@pages/Home/index.jsx'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.main_container}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
