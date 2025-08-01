'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from './whyStaking.module.scss';
import DownIcon from '@/components/icons/downIcon';
import classNames from 'classnames';
const GraphsImage = '/assets/images/graphs.png'
const MangoImage = '/assets/images/lg-mango.png'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: 'beforeChildren',
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function WhyStaking() {
  return (
    <motion.div
      className={styles.whyStaking}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='container-md'>
        <motion.div className={styles.title} variants={itemVariants}>
            <motion.div className={styles.iconCenter} variants={fadeIn}>
                <DownIcon/>
            </motion.div>
            <motion.h2 variants={fadeIn}>why stake gmg?</motion.h2>
            <motion.p variants={fadeIn}>
                Staking GMG is your ticket to secure consistent income while supporting the deflationary model of Gamerge. With fixed-term options, competitive APY, and 100% token return on maturity, our staking program ensures your commitment is both smart 
                and rewarding.
            </motion.p>
        </motion.div>
        <motion.div className={styles.grid} variants={containerVariants}>
            <motion.div className={styles.bottomCenter} variants={itemVariants}>
                <motion.img src={GraphsImage} alt='GraphsImage' initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} />
            </motion.div>
            <motion.div className={styles.topIconalignment} variants={itemVariants}>
                <motion.img src={MangoImage} alt='MangoImage' initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} />
            </motion.div>
            <motion.div className={ classNames(styles.border , styles.griditems) } variants={itemVariants}>
                <div className={styles.leftContent}>
                    <DownIcon/>
                    <h2>
                        Choose Your Staking Period
                    </h2>
                    <h3>Flexible options with competitive rewards.</h3>
                    <div className={styles.stakingPeriod}>
                        <label>
                            Staking period
                        </label>
                        <div className={styles.buttonAlignment}>
                            {["3 Months", "6 Months", "9 Months", "12 Months"].map((label, idx) => (
                              <motion.button
                                key={label}
                                className={idx === 0 ? styles.active : ''}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                {label}
                              </motion.button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.noteText}>
                        <p>
                            Note: All rewards are auto-calculated and credited at maturity. Early withdrawal is allowed but incurs a 10% deduction on 
                            the staked principal.
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div className={styles.griditems} variants={itemVariants}>
                <div className={styles.rightContent}>
                    <div className={styles.content}>
                        <h3>3%</h3>
                        <span>APY Rate</span>
                        <p>
                            Lock in: 3 Months
                        </p>
                        <p>
                            Re-locks on Registration: 3 Months
                        </p>
                        <p>
                            Monthly rate: .25% per month
                        </p>
                        <p>Payout: 100% on maturity</p>
                    </div>
                    <div className={styles.allinputalignment}>
                        <div className={styles.inputDesign}>
                            <label>Balance: 2800.00 USD</label>
                            <div className={styles.relative}>
                                <input type='number' placeholder='Enter amount'/>
                                <div className={styles.rightDetails}>
                                    <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>Max</motion.button>
                                    <motion.button className={styles.fillwhite} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>Approve</motion.button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputDesign}>
                            <label>Staked: 260.00 USD</label>
                            <div className={styles.relative}>
                                <input type='number' placeholder='Enter amount'/>
                                <div className={styles.rightDetails}>
                                    <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>Max</motion.button>
                                    <motion.button className={styles.fillwhite} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>Approve</motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
