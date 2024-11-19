import { Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Home from '@pages/Home'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.main_container}>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
