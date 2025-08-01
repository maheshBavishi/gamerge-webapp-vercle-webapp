'use client';
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ourFuture.module.scss';
import DownIcon from '@/components/icons/downIcon';
import CircleIcon from '@/components/icons/circleIcon';
import classNames from 'classnames';
import Marquee from 'react-fast-marquee';
const FoxImage = '/assets/images/fox-img.png';
const TimelineImage = '/assets/images/timeline.png';
const FoxMobileImage = '/assets/images/fox-mobile.svg';

const headingContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};
const headingWord = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};
const timelineContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};
const timelineItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const headingText = 'Our Path to the Future';

export default function OurFuture() {
    const timelineRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end start"]
    });

    const fillHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

    return (
        <>
            <div ref={timelineRef} className={styles.ourFutureAlignment}>
                <div className='container-sm2'>
                    <motion.div
                        className={styles.titleIconAlignment}
                        variants={headingContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <DownIcon />
                        <motion.h2
                        >
                            Our Path to the Future
                        </motion.h2>
                        <div className={styles.foxMobile}>
                            <img src={FoxMobileImage} alt='FoxMobileImage' />
                        </div>
                    </motion.div>
                    <motion.div
                     
                        className={styles.grid}
                        variants={timelineContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className={styles.mainLine}>

                            <motion.div className={styles.fillerLine} style={{ height: fillHeight }} />
                        </div>
                        <div className={styles.griditems}>
                            <motion.div className={styles.bottomSpacingAlignment} variants={timelineItem}>
                                <div className={styles.mainGrid}>
                                    <div className={styles.round}>
                                        <CircleIcon />
                                    </div>
                                    <div className={styles.card}>
                                        <h3>Q4 2024</h3>
                                        <p>
                                            - Launch of the Gamerge platform
                                        </p>
                                        <p>- Release of the Flappy Fox Telegram mini-game</p>
                                        <p>
                                            - Initiate international crypto community airdrops
                                        </p>
                                    </div>
                                    <div className={styles.lineAlignment}></div>
                                </div>
                            </motion.div>
                            <motion.div className={styles.bottomSpacingAlignment} variants={timelineItem}>
                                <div className={classNames(styles.mainGrid, styles.rightAlignment)}>
                                    <div className={styles.round}>
                                        <CircleIcon />
                                    </div>
                                    <div className={styles.card}>
                                        <h3>Q1 2025</h3>
                                        <p>
                                            - Launch of the revamped Gamerge website
                                        </p>
                                        <p>- Kickoff presale with an integrated affiliate program</p>
                                        <p>
                                            - Listings on top platforms like CoinMarketCap (CMC), CoinGecko (CG), and CoinPaprika (CP)
                                        </p>
                                        <p>- Release of an in-depth audit report</p>
                                        <p>
                                            - Initiate partnerships with multiple Web3 and GameFi projects
                                        </p>
                                    </div>
                                    <div className={styles.lineAlignment}></div>
                                </div>
                            </motion.div>
                            <motion.div className={styles.bottomSpacingAlignment} variants={timelineItem}>
                                <div className={classNames(styles.mainGrid)}>
                                    <div className={styles.round}>
                                        <CircleIcon />
                                    </div>
                                    <div className={styles.foxImage}>
                                        <img src={FoxImage} alt='FoxImage' />
                                    </div>
                                    <div className={styles.card}>
                                        <h3>Q2 2025</h3>
                                        <p>
                                            - Launch of mobile applications (Play Store & App Store) featuring the Flappy Fox game
                                        </p>
                                        <p>- Launch of a comprehensive B2B model supporting multichain and multicurrency operations  </p>
                                        <p>
                                            - Onboarding of B2B projects to expand ecosystem utility
                                        </p>
                                        <p>- Launch of the second game in the Gamerge ecosystem</p>
                                        <p>
                                            - Listing of the Gamerge token on prominent exchanges
                                        </p>
                                        <p>
                                            - Deployment of the staking model to enable passive income for users
                                        </p>
                                        <p>
                                            - Launch of the third game in the Gamerge ecosystem
                                        </p>
                                        <p>
                                            - Launch of the fourth game in the Gamerge ecosystem
                                        </p>
                                        <p>
                                            - Launch NFT marketplace with integrated staking features
                                        </p>
                                        <p>
                                            - Organise a first ever GMG Tokens burning event
                                        </p>
                                    </div>
                                    <div className={styles.lineAlignment}></div>
                                </div>
                            </motion.div>
                            <motion.div className={styles.bottomSpacingAlignment} variants={timelineItem}>
                                <div className={classNames(styles.mainGrid, styles.rightAlignment)}>
                                    <div className={styles.round}>
                                        <CircleIcon />
                                    </div>
                                    <div className={styles.card}>
                                        <h3>Q3 2025</h3>
                                        <p>
                                            - Forge strategic acquisitions and partnerships to drive ecosystem growth and adoption
                                        </p>
                                        <p>
                                            -Organise Gamethons (like hackathons) to attract gaming professionals
                                        </p>
                                        <p>
                                            -Integration of multiple fun-to-play-to-earn crypto games
                                        </p>
                                    </div>
                                    <div className={styles.lineAlignment}></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Marquee>
            <div className={styles.timelineImage}>
                <img src={TimelineImage} alt='TimelineImage' />
            </div>
            <div className={styles.timelineImage}>
                <img src={TimelineImage} alt='TimelineImage' />
            </div>
            <div className={styles.timelineImage}>
                <img src={TimelineImage} alt='TimelineImage' />
            </div>
            <div className={styles.timelineImage}>
                <img src={TimelineImage} alt='TimelineImage' />
            </div>

            </Marquee>
            <div className={styles.spacer}></div>
            <div className={styles.borderbottom}></div>
        </>
    )
}
