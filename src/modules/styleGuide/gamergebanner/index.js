import React from 'react'
import styles from './gamergebanner.module.scss';
import LazyImage from '@/lazyImage';
const GamergeImage = '/assets/images/gamergebanner.png';
export default function Gamergebanner() {
  return (
    <div className={styles.gamergebanner}>
       <LazyImage
          image={{
            src: GamergeImage,
            alt: "Decentralized Gaming Platform",
          }}
        />
    </div>
  )
}
