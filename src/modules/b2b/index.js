import React from 'react'
import styles from './b2b.module.scss';
import B2bBanner from './b2bBanner';
import ExploreContent from './exploreContent';
import WhychooseB2b from './whychooseB2b';
import BusinessBenefits from './businessBenefits';
import FillOutApplication from './fillOutApplication';
import Faq from '../home/faq';
import DownloadApp from '@/components/downloadApp';
import ExploreGamerges from './exploreGamerges';
import JoinGamerges from './joinGamerges';

export default function B2b() {
  return (
    <div>
      <B2bBanner />
      <ExploreContent />
      <WhychooseB2b />
      <BusinessBenefits />
      <ExploreGamerges/>
      <JoinGamerges/>
      <Faq shadowShow />
      <div className={styles.downloadAppTopAlignment}>
      <DownloadApp />
      </div>
    </div>
  )
}
