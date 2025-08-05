import React from 'react'
import styles from './featuredIn.module.scss';
import DownIcon from '@/components/icons/downIcon';
import Marquee from 'react-fast-marquee';
const TwitterIcon  = '/assets/icons/twitter-lg.svg';
const TelegramIcon  = '/assets/icons/telegram-sm.svg';
const YahooIcon  = '/assets/icons/yahoo.svg';
const DigitalIcon  = '/assets/icons/digital.svg';
const BenzingaIcon  = '/assets/icons/benzinga.svg';
export default function FeaturedIn() {
  return (
    <div className={styles.featuredInRelative}>
    <div className='container-md'>
    <div className={styles.featuredInSection}>
      <div className={styles.iconHeading}>
        <DownIcon/>
        <h2>
            Join Our Thriving Community
        </h2>
      </div>
      <div className={styles.subBox}>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.twoIconAlignment}>
                    <img src={TwitterIcon}  alt='TwitterIcon'/>
                    <img src={TelegramIcon}  alt='TelegramIcon'/>
                </div>
                <h3>
                    Live X and Telegram Feed
                </h3>
                <div className={styles.detailsText}>
                    <p>
                        Stay updated with our 
                        latest announcements
                    </p>
                </div>
            </div>
            <div className={styles.griditems}>
                <h4>
                    50000+
                </h4>
                 <h3>
                   Live X and Telegram Feed
                </h3>
                <div className={styles.detailsText}>
                    <p>
                       Stay updated with our latest announcements
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.featuredContent}>
            <h3>
                Featured In
            </h3>
            <p>
                Recognized by leading publications
            </p>
            <div className={styles.iconAlignment}>
                <Marquee>
                <img src={YahooIcon} alt='YahooIcon'/>
                <img src={DigitalIcon} alt='DigitalIcon'/>
                <img src={BenzingaIcon} alt='BenzingaIcon'/>
                <img src={YahooIcon} alt='YahooIcon'/>
                <img src={DigitalIcon} alt='DigitalIcon'/>
                <img src={BenzingaIcon} alt='BenzingaIcon'/>
                </Marquee>
            </div>
        </div>
      </div>
    </div>
    </div>
</div>
  )
}
