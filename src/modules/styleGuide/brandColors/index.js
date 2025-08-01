import React from 'react'
import styles from './brandColors.module.scss';
export default function BrandColors() {
  return (
    <div className={styles.brandColors}>
        <div className='container-md'>
            <div className={styles.box}>
                <h2>
                    brand colors of gamerge
                </h2>
                <div className={styles.fourCol}>
                    <div className={styles.colItems}>
                        <p>#00FF7F</p>
                    </div>
                    <div className={styles.colItems}>
                        <p>#6A00FF</p>
                    </div>
                    <div className={styles.colItems}>
                        <p>#00000</p>
                    </div>
                    <div className={styles.colItems}>
                        <p>#FFFFFF</p>
                    </div>
                </div>
                <div className={styles.colorGrid}>
                    <div className={styles.items}>
                        <p>#0FC38D</p>
                    </div>
                    <div className={styles.items}>
                        <p>#BCFFEB</p>
                    </div>
                    <div className={styles.items}>
                        <p>#D33D3E</p>
                    </div>
                    <div className={styles.items}>
                        <p>#FFBABA</p>
                    </div>
                    <div className={styles.items}>
                        <p>#F9F9F9</p>
                    </div>
                    <div className={styles.items}>
                        <p>#CCCCCC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
