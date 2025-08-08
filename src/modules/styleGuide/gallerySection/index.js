import React from 'react'
import styles from './gallerySection.module.scss';
import LazyImage from '@/lazyImage';
const StyleOne = '/assets/images/style1.png';
const StyleTwo = '/assets/images/style2.png';
const StyleThree = '/assets/images/style3.png';
export default function GallerySection() {
  return (
    <div className={styles.gallerySection}>
      <div className='container-md'>
        <div className={styles.grid}>
          <div className={styles.griditems}>
            <LazyImage
              image={{
                src: StyleOne,
                alt: "Crypto Gaming",
              }}
            />
          </div>
          <div className={styles.griditems}>
            <LazyImage
              image={{
                src: StyleTwo,
                alt: "Mobile Crypto Gaming",
              }}
            />
          </div>
          <div className={styles.griditems}>
            <LazyImage
              image={{
                src: StyleThree,
                alt: "Crypto Gaming Ecosystem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
