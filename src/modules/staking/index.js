import React from 'react'
import styles from './staking.module.scss';
import StakingBanner from './stakingBanner';
import WhyStaking from './whyStaking';
import StakeStrengthen from './stakeStrengthen';
import Faq from '../home/faq';
import DownloadApp from '@/components/downloadApp';
import GetStarted from './getStarted';
export default function Staking() {
  return (
    <div>
      <StakingBanner />
      <WhyStaking />
      <StakeStrengthen />
      <GetStarted/>
      <Faq />
      <div className={styles.downloadAppTopAlignment}>
      <DownloadApp />
      </div>
    </div>
  )
}
