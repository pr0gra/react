import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import styles from './App.module.css'
import './reset.css'
import AboutUs from './components/AboutUs/AboutUs'
import aboutUsList from './arrays/about-us-list.js'
import OurExpereince from './components/OurExpereince/OurExpereince.js'

function App() {
  return (
    <>
      <div className={styles['page-width']}>
        <Header />
      </div>
      <Hero />

      <div className={styles['page-width']}>
        <AboutUs list={aboutUsList} />
      </div>

      <OurExpereince />
    </>
  )
}

export default App
