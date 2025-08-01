import React from 'react'
import PresaleBanner from './presaleBanner'
import PresaleDetails from './presaleDetails'
import EarnUsdt from './earnUsdt'
import DownloadApp from '@/components/downloadApp'
import Faq from '../home/faq'
import PresalePhases from './presalePhases'
import styles from './presale.module.scss';
export default function PresalePage() {
  return (
    <div>
      <PresaleBanner />
      <PresaleDetails />
      <EarnUsdt />
      <PresalePhases/>
      <Faq />
     <div className={styles.downloadAppTopAlignment}>
       <DownloadApp />
     </div>
    </div>
  )
}
