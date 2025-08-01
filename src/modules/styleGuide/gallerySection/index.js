import React from 'react'
import styles from './gallerySection.module.scss';
const StyleOne = '/assets/images/style1.png';
const StyleTwo = '/assets/images/style2.png';
const StyleThree = '/assets/images/style3.png';
export default function GallerySection() {
  return (
    <div className={styles.gallerySection}>
      <div className='container-md'>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <img src={StyleOne} alt='StyleOne'/>
            </div>
            <div className={styles.griditems}>
                <img src={StyleTwo} alt='StyleTwo'/>
            </div>
            <div className={styles.griditems}>
                <img src={StyleThree} alt='StyleThree'/>
            </div>
        </div>
      </div>
    </div>
  )
}
