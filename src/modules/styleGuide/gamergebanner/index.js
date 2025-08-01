import React from 'react'
import styles from './gamergebanner.module.scss';
const GamergeImage = '/assets/images/gamergebanner.png';
export default function Gamergebanner() {
  return (
    <div className={styles.gamergebanner}>
        <img src={GamergeImage} alt='GamergeImage'/>
    </div>
  )
}
