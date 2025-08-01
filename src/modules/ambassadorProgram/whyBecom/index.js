'use client'
import React from 'react'
import styles from './whyBecom.module.scss';
import DownIcon from '@/components/icons/downIcon';
import { motion } from 'framer-motion';

const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const titleWord = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};
const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const titleText = 'Why become an ambassador?';
const titleWords = titleText.split(' ');
const PosterImage = '/assets/images/primary-poster.png';
const CommunityImage = '/assets/images/Community.png';
const CostImage = '/assets/images/Cost.png';
export default function WhyBecom() {
  return (
    <div>
        <div className={styles.whyBecomAlignment}>
            <div className='container-md'>
                <div className={styles.iconCenter}>
                    <DownIcon />
                </div>
                <motion.div
                  className={styles.title}
                  variants={titleContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <motion.h2 >
                   Why become an ambassador?
                  </motion.h2>
                </motion.div>
                <motion.div
                  className={styles.grid}
                  variants={gridContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div className={styles.griditems} variants={cardVariant}>
                    <div className={styles.image}>
                        <img src={PosterImage} alt='PosterImage'/>
                    </div>
                    <div className={styles.details}>
                        <h3>Earn While You Refer</h3>
                        <p>
                          Refer projects to list on Gamerge and earn up to 10% on each successful referral. Build the community, get rewarded.
                        </p>
                    </div>
                  </motion.div>
                  <motion.div className={styles.griditems} variants={cardVariant}>
                    <div className={styles.image}>
                        <img src={CostImage} alt='CostImage'/>
                    </div>
                    <div className={styles.details}>
                        <h3>Community Building</h3>
                        <p>
                           Connect with like-minded crypto projects, gamers and creators, fostering a vibrant and supportive community.
                        </p>
                    </div>
                  </motion.div>
                  <motion.div className={styles.griditems} variants={cardVariant}>
                    <div className={styles.image}>
                        <img src={CommunityImage} alt='CommunityImage'/>
                    </div>
                    <div className={styles.details}>
                        <h3>Recognition</h3>
                        <p>
                      Gain visibility and acknowledgment for your contributions to the gaming and Web3 space.
                        </p>
                    </div>
                  </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
