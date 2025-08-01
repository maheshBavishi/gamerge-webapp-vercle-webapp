import React from 'react'
import styles from './brandIdentity.module.scss';
import DownloadIcon from '@/components/icons/downloadIcon';
const BrandLogo = '/assets/images/brand-logo.png';
const BrandLogoMobile = '/assets/images/mobile-brand-logo.png';
export default function BrandIdentity() {
    return (
        <div className={styles.brandIdentity}>
            <div className='container-xs2'>
                <div className={styles.title}>
                    <h2>
                        Brand Identity of
                        Gamerge
                    </h2>
                </div>
                <div className={styles.image}>
                    <img src={BrandLogo} alt='BrandLogo'/>
                </div>
                <div className={styles.brandLogoMobile}>
                    <img src={BrandLogoMobile} alt='BrandLogoMobile'/>
                </div>
                <div className={styles.twoButtonAlignment}>
                    <button>
                        <DownloadIcon/>
                        PNG
                    </button>
                    <button>
                        <DownloadIcon/>
                        SVG
                    </button>
                </div>
            </div>
        </div>
    )
}
