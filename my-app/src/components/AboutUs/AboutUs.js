import React from 'react'
import ContactButton from '../ContactButton/ContactButton'
import styles from './AboutUs.module.css'
import aboutUsImg from '../../assets/images/about-us.svg'
import AboutUsBenefits from '../AboutUsBenefits/AboutUsBenefits.js'

export default function AboutUs(props) {
  return (
    <>
      <div className={styles['about-us-container']}>
        <img className={styles['about-us-image']} src={aboutUsImg} alt="" />
        <div className={styles['about-us-text-block']}>
          <p className={styles['text']}>About Us</p>
          <h2 className={styles['title']}>
            We Are <span>Making Ideas Better</span> For Everyone
          </h2>
          <div className={styles['text']}>
            <p className={styles['text-top-part']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
              aenean
            </p>
            <p className={styles['text-bottom-part']}>
              Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
              faucibus est, dui interdum ut amet.
            </p>
          </div>
          <ContactButton />
        </div>
      </div>
      <div className={styles['benefits-array']}>
        <AboutUsBenefits list={props.list} />
      </div>
    </>
  )
}
