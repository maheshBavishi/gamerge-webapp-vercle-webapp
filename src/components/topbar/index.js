import React from 'react'
import styles from './topbar.module.scss';
import Link from 'next/link';
export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className='container-md'>
      <p >
        Join World's First Fun-to-play-to-earn Gamefi <a href="/presale" aria-label='Presale' target='_blank'> a</a>
      </p>
      </div>
    </div>
  )
}
