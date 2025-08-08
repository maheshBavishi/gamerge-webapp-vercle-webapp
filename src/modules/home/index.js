import React from 'react'
import dynamic from 'next/dynamic'

// const Herobanner = dynamic(() => import('./herobanner'))
const CryptoContent = dynamic(() => import('./cryptoContent'))
const Partners = dynamic(() => import('./partners'))
const SkillbaseSection = dynamic(() => import('./skillbaseSection'))
const GameModes = dynamic(() => import('./gameModes'))
const HeartOfGamerge = dynamic(() => import('./heartOfGamerge'))
const GamergeTokenomics = dynamic(() => import('./gamergeTokenomics'))
const OurFuture = dynamic(() => import('./ourFuture'))
const Faq = dynamic(() => import('./faq'))
const MediaPresence = dynamic(() => import('./mediaPresence'))
const DownloadApp = dynamic(() => import('@/components/downloadApp'))
const ListToken = dynamic(() => import('./listToken'))
const FeaturedIn = dynamic(() => import('./featuredIn'))

export default function HomePage() {
  return (
    <>
      {/* <Herobanner /> */}
      <CryptoContent />
      <Partners />
      <SkillbaseSection />
      <GameModes />
      <HeartOfGamerge />
      <GamergeTokenomics />
      <OurFuture />
      <FeaturedIn />
      <ListToken />
      <Faq shadowShow={false} />
      <MediaPresence />
      <DownloadApp />
    </>
  )
}
