import React from 'react'
import styles from './mainGallery.module.scss';
const MainGalleryImage = '/assets/images/main-gallery.png';
const MockupImage = '/assets/images/mockup1.png';
export default function MainGallery() {
  return (
    <div>
      <div className={styles.maingalleryGrid}>
        <img src={MockupImage} alt='MockupImage'/>
        <img src={MockupImage} alt='MockupImage'/>
      </div>
      <div className={styles.maingalleryImage}>
        <img src={MainGalleryImage} alt='MainGalleryImage'/>
      </div>
    </div>
  )
}
