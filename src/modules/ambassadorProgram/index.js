import React from 'react'
import styles from './ambassadorProgram.module.scss';
import AmbassadorProgramBanner from './ambassadorProgramBanner';
import WhyBecom from './whyBecom';
import FillOutApplication from '../b2b/fillOutApplication';
import RoleAsAmbassador from './roleAsAmbassador';
import Faq from '../home/faq';
import DownloadApp from '@/components/downloadApp';
export default function AmbassadorProgram() {
  return (
    <>
        <AmbassadorProgramBanner/>
        <WhyBecom/>
        <RoleAsAmbassador/> 
        <FillOutApplication/>
        <Faq/>
        <div className={styles.downloadAppTopAlignment}>
        <DownloadApp/>
        </div>
    </>
   
  )
}
