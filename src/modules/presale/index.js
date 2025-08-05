import React from 'react'
import PresaleBanner from './presaleBanner'
import PresaleDetails from './presaleDetails'
import EarnUsdt from './earnUsdt'
import DownloadApp from '@/components/downloadApp'
import Faq from '../home/faq'
import PresalePhases from './presalePhases'
import styles from './presale.module.scss';
import { useReadPresale } from "@/lib/hooks/use-read-presale";
export default function PresalePage({ address }) {
  const { data, isPending: isPendingPresale } = useReadPresale(address);


  return (
    <div>
      <PresaleBanner />
      <PresaleDetails address={address} />
      <EarnUsdt />
      <PresalePhases />
      <Faq />
      <div className={styles.downloadAppTopAlignment}>
        <DownloadApp />
      </div>
    </div>
  )
}
