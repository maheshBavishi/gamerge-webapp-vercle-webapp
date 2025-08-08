import React from 'react'
import styles from './mediaPresence.module.scss';
import DownIcon from '@/components/icons/downIcon';
import Marquee from "react-fast-marquee";
import LazyImage from '@/lazyImage';
const QuillAuditImage = '/assets/images/QuillAudit.svg';
const IcoholderImage = '/assets/images/icoholder.svg';
const CoinstatsImage = '/assets/images/coinstats.svg';
const SkynetImage = '/assets/images/skynet.svg';
const IqwikiImage = '/assets/images/iqwiki.svg';
const CoingabbarImage = '/assets/images/coin-gabbar.svg';
const BandImage = '/assets/images/band.svg';

export default function MediaPresence() {
    return (
        <div className={styles.mediaPresence}>
            <div className='container-md'>
                <div className={styles.titleIconAlignment}>
                    <DownIcon />
                    <h2>
                        Media Presence
                    </h2>
                </div>
            </div>
            <Marquee>
                <div className={styles.logoBox}>
                    <a aria-label='quillaudits' href="https://www.quillaudits.com/leaderboard/gamerge" target='_blank'>
                     <LazyImage
                        image={{
                            src: QuillAuditImage,
                            alt: 'Play to Earn',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label="icoholder" href='https://icoholder.com/en/gamerge-1090860' target='_blank'>
                      <LazyImage
                        image={{
                            src: IcoholderImage,
                            alt: 'Crypto Gaming Utility',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='cointrust' href="https://coinstats.app/news/88af8a8a946a4eda69e9405f4cf14ef3750f39127587b70df1b091a0778c10fe_Terminus-Taps-Gamerge-to-Boost-Web3-Gaming-and-PayFi-Innovation/" target='_blank'>
                      <LazyImage
                        image={{
                            src: CoinstatsImage,
                            alt: 'P2E Crypto Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a href="https://skynet.certik.com/projects/gamerge" aria-label='skynet' target='_blank'>
                     <LazyImage
                        image={{
                            src: SkynetImage,
                            alt: 'CEX Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='wiki' href="https://iq.wiki/wiki/gamerge" target='_blank'>
                       <LazyImage
                        image={{
                            src: IqwikiImage,
                            alt: 'GameFi Ecosystem',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='CoingabbarImage' href="https://www.coingabbar.com/en/crypto-ico-details/gamerge-latest-ico-token-gamefi-project?srsltid=AfmBOoq1zFHXQSOLiBUT01jCU1MGnTuHBNoIKSvlBT_EbXrtZwW_gF9M" target='_blank'>
                        <LazyImage
                        image={{
                            src: CoingabbarImage,
                            alt: 'Blockchain Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='band' href='https://www.band.us/band/98694156/post/1' target='_blank'>
                      <LazyImage
                        image={{
                            src: BandImage,
                            alt: 'Free Crypto Airdrop',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='quillaudits' href="https://www.quillaudits.com/leaderboard/gamerge" target='_blank'>
                     <LazyImage
                        image={{
                            src: QuillAuditImage,
                            alt: 'Play to Earn',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label="icoholder" href='https://icoholder.com/en/gamerge-1090860' target='_blank'>
                      <LazyImage
                        image={{
                            src: IcoholderImage,
                            alt: 'Crypto Gaming Utility',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='cointrust' href="https://coinstats.app/news/88af8a8a946a4eda69e9405f4cf14ef3750f39127587b70df1b091a0778c10fe_Terminus-Taps-Gamerge-to-Boost-Web3-Gaming-and-PayFi-Innovation/" target='_blank'>
                      <LazyImage
                        image={{
                            src: CoinstatsImage,
                            alt: 'P2E Crypto Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a href="https://skynet.certik.com/projects/gamerge" aria-label='skynet' target='_blank'>
                     <LazyImage
                        image={{
                            src: SkynetImage,
                            alt: 'CEX Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='wiki' href="https://iq.wiki/wiki/gamerge" target='_blank'>
                       <LazyImage
                        image={{
                            src: IqwikiImage,
                            alt: 'GameFi Ecosystem',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='CoingabbarImage' href="https://www.coingabbar.com/en/crypto-ico-details/gamerge-latest-ico-token-gamefi-project?srsltid=AfmBOoq1zFHXQSOLiBUT01jCU1MGnTuHBNoIKSvlBT_EbXrtZwW_gF9M" target='_blank'>
                        <LazyImage
                        image={{
                            src: CoingabbarImage,
                            alt: 'Blockchain Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='band' href='https://www.band.us/band/98694156/post/1' target='_blank'>
                      <LazyImage
                        image={{
                            src: BandImage,
                            alt: 'Free Crypto Airdrop',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='quillaudits' href="https://www.quillaudits.com/leaderboard/gamerge" target='_blank'>
                     <LazyImage
                        image={{
                            src: QuillAuditImage,
                            alt: 'Play to Earn',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label="icoholder" href='https://icoholder.com/en/gamerge-1090860' target='_blank'>
                      <LazyImage
                        image={{
                            src: IcoholderImage,
                            alt: 'Crypto Gaming Utility',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='cointrust' href="https://coinstats.app/news/88af8a8a946a4eda69e9405f4cf14ef3750f39127587b70df1b091a0778c10fe_Terminus-Taps-Gamerge-to-Boost-Web3-Gaming-and-PayFi-Innovation/" target='_blank'>
                      <LazyImage
                        image={{
                            src: CoinstatsImage,
                            alt: 'P2E Crypto Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a href="https://skynet.certik.com/projects/gamerge" aria-label='skynet' target='_blank'>
                     <LazyImage
                        image={{
                            src: SkynetImage,
                            alt: 'CEX Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='wiki' href="https://iq.wiki/wiki/gamerge" target='_blank'>
                       <LazyImage
                        image={{
                            src: IqwikiImage,
                            alt: 'GameFi Ecosystem',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='CoingabbarImage' href="https://www.coingabbar.com/en/crypto-ico-details/gamerge-latest-ico-token-gamefi-project?srsltid=AfmBOoq1zFHXQSOLiBUT01jCU1MGnTuHBNoIKSvlBT_EbXrtZwW_gF9M" target='_blank'>
                        <LazyImage
                        image={{
                            src: CoingabbarImage,
                            alt: 'Blockchain Games',
                        }} />
                    </a>
                </div>
                <div className={styles.logoBox}>
                    <a aria-label='band' href='https://www.band.us/band/98694156/post/1' target='_blank'>
                      <LazyImage
                        image={{
                            src: BandImage,
                            alt: 'Free Crypto Airdrop',
                        }} />
                    </a>
                </div>
             
            </Marquee>
        </div>
    )
}
