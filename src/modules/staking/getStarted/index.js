'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from './getStarted.module.scss';
import DownIcon from '@/components/icons/downIcon';
import LazyImage from '@/lazyImage';
const TreeImage = '/assets/images/tree.png';

// Animation variants
const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, when: 'beforeChildren', staggerChildren: 0.15 } }
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const titleVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const headingVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function GetStarted() {
    return (
        <motion.div
            className={styles.getStarted}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className='container-md'>
                <div className={styles.box}>
                    <div className={styles.titleAlignment}>
                        <DownIcon />
                        <motion.h2 variants={titleVariant}>
                            get started in seconds
                        </motion.h2>
                    </div>
                    <div className={styles.treeImage}>
                        <LazyImage
                            image={{
                                src: TreeImage,
                                alt: 'Crypto Gaming',
                            }} />
                    </div>
                    <div className={styles.grid}>
                        {[{
                            num: '01.',
                            title: 'Download Gamerge App',
                            desc: 'First things first. get the app and complete onboarding process.'
                        }, {
                            num: '02.',
                            title: 'Choose a staking plan',
                            desc: 'Gamerge offers a variety of different plans to choose from'
                        }, {
                            num: '03.',
                            title: 'Confirm & lock in your GMG',
                            desc: 'After selecting your preferred plan lock in your GMG'
                        }, {
                            num: '04.',
                            title: 'Watch your rewards grow',
                            desc: 'SIt back and watch your rewards grow'
                        }].map((item, idx) => (
                            <motion.div
                                className={styles.griditems}
                                key={item.num}
                                variants={cardVariant}
                                whileHover={{
                                    boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.80)',
                                    transition: { duration: 0.3, ease: 'easeInOut' },
                                }}
                            >
                                <motion.h4 variants={headingVariant}>{item.num}</motion.h4>
                                <span>{item.num}</span>
                                <motion.h3 variants={headingVariant}>{item.title}</motion.h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
