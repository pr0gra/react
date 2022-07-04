import Header from './components/Header/Header'
import './App.css'
import Hero from './components/Hero/Hero'
import styles from './App.module.css'

function App() {
  return (
    <>
      <div className={styles['page-width']}>
        <Header />
      </div>
      <Hero />
      <div className={styles['page-width']}></div>
    </>
  )
}

export default App
