'use client'
import React, { useState } from 'react'
import styles from './faq.module.scss';
import DownIcon from '@/components/icons/downIcon';
import PlusIcon from '@/components/icons/plusIcon';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
const faqData = [
    {
        question: 'What is Gamerge?',
        answer: 'Gamerge is a GameFi platform where you play skill-based games built on unity engine and earn real crypto rewards.',
    },
    {
        question: 'How do I start playing?',
        answer: ' Download the mobile app apk from www.gamerge.ai or find us on playstore and appstore. Sign up and start playing instantly.',
    },
    {
        question: 'Do I need crypto to begin?',
        answer: ' No, you can start with Practice Mode for free as well.',
    },
    {
        question: 'Which games are available?',
        answer: ' Flappy Fox, Bull Run, Crypto Ninja, and Cryptetris are currently live.',
    },
    {
        question: 'What game modes can I play?',
        answer: '  You can choose from Practice Mode, 1v1 battles, or Tournaments.',
    },
]
const faqDataSec = [
    {
        question: 'What is the Loot Vault?',
        answer: ' It stores your points earned in Lucky Spin Wheel, Practice Mode, Referral Points. You can use them to airdrops.',
    },
    {
        question: 'How can I earn on Gamerge?',
        answer: ' Earn by winning matches, joining tournaments, referring users, or staking GMG tokens.',
    },
    {
        question: 'How are 1v1 match rewards given?',
        answer: ' The winner gets 90%. If using GMG, 5% is burned and 5% goes to referrals.',
    },
    {
        question: 'Is Gamerge secure?',
        answer: ' Yes. GMG uses a multisig wallet and its smart contract is public and verifiable.',
    },
    {
        question: 'How can I claim the airdrop?',
        answer: '  Go to Gamerge app Loot Vault Section click “Claim Airdro,” complete tasks, and receive free tokens.',
    },
]
export default function Faq({shadowShow = true}) {
    const [activeIndex, setActiveIndex] = useState(null)
    const [activeIndexSec, setActiveIndexSec] = useState(null)

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    const toggleFaqSec = (index) => {
        setActiveIndexSec(activeIndexSec === index ? null : index)
    }
    return (
        <div className={ classNames(styles.faqSectionAlignment , shadowShow ? styles.faqRelativeSection : "") }>
            <div className='container-md'>
                <motion.div
                    className={styles.titleIconAlignment}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <DownIcon />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                    >
                        FAqs
                    </motion.h2>
                </motion.div>
                <div className={styles.grid}>
                    <div className={styles.griditems}>

                    </div>
                    <div className={styles.griditems}>

                    </div>
                </div>
                <div className={styles.secgrid}>
                    <div>
                        <div className={styles.cardHeader}>
                            <h3>About Gamerge</h3>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.cardBody}>
                                {faqData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={classNames(styles.mainBox, activeIndex === index && styles.bgActive)}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <div className={styles.faqHeader} onClick={() => toggleFaq(index)}>
                                            <h4>{item.question}</h4>
                                            <motion.div
                                                className={classNames(styles.icon, activeIndex === index && styles.rotate)}

                                                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <PlusIcon />
                                            </motion.div>
                                        </div>
                                        <AnimatePresence initial={false}>
                                            {activeIndex === index && (
                                                <motion.div
                                                    className={classNames(styles.faqBody, styles.show)}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className={styles.spacing}>
                                                        <p>{item.answer}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.cardHeader}>
                            <h3>About Gamerge</h3>
                        </div>
                        <div className={styles.cardBody}>
                            {faqDataSec.map((item, index) => (
                                <motion.div
                                    key={index}
                                   className={classNames(styles.mainBox, activeIndexSec === index && styles.bgActive)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className={styles.faqHeader} onClick={() => toggleFaqSec(index)}>
                                        <h4>{item.question}</h4>
                                        <motion.div
                                            className={classNames(styles.icon, activeIndexSec === index && styles.rotate)}

                                            animate={{ rotate: activeIndexSec === index ? 45 : 0 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <PlusIcon />
                                        </motion.div>
                                    </div>
                                    <AnimatePresence initial={false}>
                                        {activeIndexSec === index && (
                                            <motion.div
                                                className={classNames(styles.faqBody, styles.show)}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className={styles.spacing}>
                                                    <p>{item.answer}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.borderbottom}></div>
        </div>
    )
}
