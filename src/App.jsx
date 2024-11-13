import { Routes, Route } from 'react-router-dom'
import Default from '@components/Default'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './app.module.scss'
import Home from './pages/Home/index'

function App() {
  return (
    <div className={styles.main_container}>
      <Header />
      <Default />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
