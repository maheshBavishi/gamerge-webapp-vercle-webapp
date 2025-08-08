'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './stakingBanner.module.scss';
import InformationIcon from '@/components/icons/informationIcon';
import LazyImage from '@/lazyImage';
const BitCoinImage = '/assets/images/bitcoin-group.svg';
const FoxImage = '/assets/images/fox.svg';
const LineViewImage = '/assets/images/line-view.svg';
const PosterImage = '/assets/images/poster1.png';
const PosterTwoImage = '/assets/images/poster2.png';
const BlueCoin = '/assets/images/blue-coin.svg';
const PinkCoin = '/assets/images/pink-coin.svg';
const BlueCoinGroup = '/assets/images/blue-group.svg';
const PinkCoinGroup = '/assets/images/pink-group.svg';

const MAX_OFFSET = 40; // px

export default function StakingBanner() {
    const bannerRef = useRef(null);
    const [bannerRect, setBannerRect] = useState(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 120, damping: 20 });
    const springY = useSpring(y, { stiffness: 120, damping: 20 });

    useEffect(() => {
        if (bannerRef.current) {
            setBannerRect(bannerRef.current.getBoundingClientRect());
        }
        const handleResize = () => {
            if (bannerRef.current) {
                setBannerRect(bannerRef.current.getBoundingClientRect());
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e) => {
        if (!bannerRect) return;
        const mouseX = e.clientX - bannerRect.left;
        const mouseY = e.clientY - bannerRect.top;
        const centerX = bannerRect.width / 2;
        const centerY = bannerRect.height / 2;
        // Calculate offset, invert direction, clamp to max offset
        const offsetX = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, (centerX - mouseX) / 10));
        const offsetY = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, (centerY - mouseY) / 10));
        x.set(offsetX);
        y.set(offsetY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <>
            <div
                className={styles.stakingBanner}
                ref={bannerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative', overflow: 'hidden' }}
            >
                <motion.div
                    id="moveable"
                    style={{
                        x: springX,
                        y: springY,
                        willChange: 'transform',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none', // so mouse events pass through
                    }}
                >
                    <div className={styles.lineview}>
                        <LazyImage
                            image={{
                                src: LineViewImage,
                                alt: 'Buy GMG Tokens',
                            }} />
                    </div>


                    <div className={styles.blueCoin}>
                        <LazyImage
                            image={{
                                src: BlueCoin,
                                alt: 'Buy GMG Tokens',
                            }} />
                    </div>
                    <div className={styles.pinkCoin}>
                        <LazyImage
                            image={{
                                src: PinkCoin,
                                alt: 'Blockchain Gaming Platform',
                            }} />
                    </div>
                    <div className={styles.blueCoinGroup}>
                        <LazyImage
                            image={{
                                src: BlueCoinGroup,
                                alt: 'Web3 Gaming Platform',
                            }} />
                    </div>
                    <div className={styles.pinkCoinGroup}>
                        <LazyImage
                            image={{
                                src: PinkCoinGroup,
                                alt: 'GameFi Aggregator Platform',
                            }} />
                    </div>
                    <div className={styles.leftIcon}>
                        <LazyImage
                            image={{
                                src: BitCoinImage,
                                alt: 'Token Utility Platform',
                            }} />
                    </div>
                    <div className={styles.foxImage}>
                        <LazyImage
                            image={{
                                src: FoxImage,
                                alt: 'Crypto Game Tournaments',
                            }} />
                    </div>
                </motion.div>
                <div className={styles.posterLeft}>
                    <LazyImage
                        image={{
                            src: PosterImage,
                            alt: 'Mobile Crypto Games',
                        }} />
                </div>
                <div className={styles.posterRight}>
                    <LazyImage
                        image={{
                            src: PosterTwoImage,
                            alt: 'Web3 Games',
                        }} />
                </div>
                <div className='container-md'>
                    <div className={styles.text}>

                        <h1>
                            {`Gamerge’s`} (GMG) Staking Program Powering the
                            <span> Future of GameFi</span>
                        </h1>
                        <p>
                            Put your GMG tokens to work with our flexible and rewarding
                            <span> staking plans </span>
                            and earn upto 6% APY—designed for gamers, investors, and believers in the
                            future of <span> GameFi. </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.readSection}>
                <div className='container-md'>
                    <div className={styles.iconText}>
                        <InformationIcon />
                        <span>Read Staking Commitments Before Making any Stakes. </span>
                    </div>
                </div>
            </div>
        </>
    )
}
