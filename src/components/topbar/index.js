import React from 'react'
import styles from './topbar.module.scss';
import Link from 'next/link';
export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className='container-md'>
      <p >
        Join World’s First Fun-to-play-to-earn Gamefi <Link href="/presale" aria-label='Presale'> Presale</Link>
      </p>
      </div>
    </div>
  )
}
