import React from 'react'
import ContactButton from '../ContactButton/ContactButton.js'
import styles from './Hero.module.css'
import heroImage from '../../assets/images/hero-image.svg'
export default function Hero() {
  return (
    <div className={styles['hero']}>
      <img className={styles['hero-image']} src={heroImage} alt="" />
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>
          We Are The Best
          <span> Digital Agency</span> for business
        </h1>
        <p className={styles['hero-subtitle']}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. .
        </p>
      </div>
      <ContactButton />
    </div>
  )
}
