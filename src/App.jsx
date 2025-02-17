import Header from '@components/Header'
import Footer from '@components/Footer'
import AppRoutes from '@routing/Routes/index'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.main_container}>
      <Header />
      <AppRoutes/>
      <Footer />
    </div>
  )
}

export default App
