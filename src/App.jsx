// import Default from './components/Default'
import Home from '@pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.main_container}>
      <Header />
      <Home />
    </div>
  )
}

export default App
