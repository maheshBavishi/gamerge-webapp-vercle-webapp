import React from 'react'
import styles from './mainGallery.module.scss';
import LazyImage from '@/lazyImage';
const MainGalleryImage = '/assets/images/main-gallery.png';
const MockupImage = '/assets/images/mockup1.png';
export default function MainGallery() {
  return (
    <div>
      <div className={styles.maingalleryGrid}>
        <LazyImage
          image={{
            src: MockupImage,
            alt: "Web3 Gaming",
          }}
        />
        <LazyImage
          image={{
            src: MockupImage,
            alt: "Crypto Game Tournaments",
          }}
        />
      </div>
      <div className={styles.maingalleryImage}>
        <LazyImage
          image={{
            src: MainGalleryImage,
            alt: "Gaming Aggregator Platform",
          }}
        />
      </div>
    </div>
  )
}
