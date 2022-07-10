import styles from './OurExpereinceList.module.css'
import React from 'react'

export default function OurExpereinceList(props) {
  let list = props.list
  let listOfElements = list.map(elem => (
    <div className={styles['list-item']} key={elem.id}>
      <h2 className={styles['title']}>{elem.title}</h2>
      <p className={styles['subtitle']}>{elem.subtitle}</p>
    </div>
  ))
  return <>{listOfElements}</>
}
