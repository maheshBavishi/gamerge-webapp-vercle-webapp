import React from 'react'
import styles from './topbar.module.scss';
import Link from 'next/link';
export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <Link href="/presale">
        Join World’s First Fun-to-play-to-earn Gamefi Presale
      </Link>
    </div>
  )
}
