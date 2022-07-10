import React from 'react'
import ContactButton from '../ContactButton/ContactButton'
import OurExpereinceList from '../OurExpereinceList/OurExpereinceList'
import styles from './OurExpereince.module.css'
import ourExpereinceList from '../../arrays/our-expereince-list'

export default function OurExpereince() {
  return (
    <div className={styles['our-experience']}>
      <div className={styles['text-part']}>
        <p className={styles['text-part-subtitle']}>Our Expereince</p>
        <h2 className={styles['text-part-title']}>
          We Have Completed <span>150+ Projects</span> Succesfully
        </h2>
        <div className={styles['text-part-content']}>
          <p className={styles['text-part-content-top']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            imperdiet at a augue ullamcorper.
          </p>
          <p className={styles['text-part-content-bottom']}>
            Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
            faucibus est, dui interdum ut amet.
          </p>
        </div>
        <ContactButton />
      </div>
      <div className={styles['list-part']}>
        <OurExpereinceList list={ourExpereinceList} />
      </div>
    </div>
  )
}
