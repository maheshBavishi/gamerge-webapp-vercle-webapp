import React from 'react'
import Herobanner from './herobanner'
import CryptoContent from './cryptoContent'
import Partners from './partners'
import SkillbaseSection from './skillbaseSection'
import GameModes from './gameModes'
import HeartOfGamerge from './heartOfGamerge'
import GamergeTokenomics from './gamergeTokenomics'
import OurFuture from './ourFuture'
import Faq from './faq'
import MediaPresence from './mediaPresence'
import DownloadApp from '@/components/downloadApp'

export default function HomePage() {
  return (
    <>
      <Herobanner />
      <CryptoContent />
      <Partners />
      <SkillbaseSection />
      <GameModes />
      <HeartOfGamerge />
      <GamergeTokenomics />
      <OurFuture />
      <Faq/>
      <MediaPresence/>
      <DownloadApp/>
    </>
  )
}
