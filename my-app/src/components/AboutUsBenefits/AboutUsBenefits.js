import React from 'react'
import styles from './AboutUsBenefits.module.css'

export default function AboutUsBenefits(props) {
  let list = props.list
  let item = list.map(element => (
    <div className={styles['about-us-element']} key={element.id}>
      <img src={element.icon} alt="" />
      <p className={styles['about-us-element-text']}>{element.text}</p>
    </div>
  ))
  return <>{item}</>
}
