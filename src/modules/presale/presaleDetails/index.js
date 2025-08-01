'use client';
import React from 'react'
import { motion } from 'framer-motion';
import styles from './presaleDetails.module.scss';
import BuyGmg from './buyGmg';
import SharePrimaryIcon from '@/components/icons/sharePrimaryIcon';
const WalletIcon = '/assets/icons/wallet.svg';
const PriceIcon = '/assets/icons/price.svg';
const CoinsIcon = '/assets/icons/coins.svg';
const TransferIcon = '/assets/icons/transfer.svg';
export default function PresaleDetails() {
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className={styles.presaleDetails}>
      <div className='container-md'>
        <div className={styles.title}>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                Presale
            </motion.h2>
        </div>
        <div className={styles.textGrid}>
            <p>Phase 1</p>
            <div className={styles.line}>
                <div className={styles.active}></div>
            </div>
            <span>96420 GMG</span>
        </div>
        <motion.div className={styles.cardGrid} variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className={styles.cardGriditems} variants={cardVariants}>
                <div className={styles.icon}>
                    <img src={WalletIcon} alt='WalletIcon'/>
                </div>
                <div>
                    <p>Your Total GMG Balance</p>
                    <span>0.000 GMG</span>
                </div>
            </motion.div>
            <motion.div className={styles.cardGriditems} variants={cardVariants}>
                <div className={styles.icon}>
                    <img src={PriceIcon} alt='PriceIcon'/>
                </div>
                <div>
                    <p>GMG Pre-Sale Price</p>
                    <span>0.01 USD</span>
                </div>
            </motion.div>
            <motion.div className={styles.cardGriditems} variants={cardVariants}>
                <div className={styles.icon}>
                    <img src={CoinsIcon} alt='CoinsIcon'/>
                </div>
                <div>
                    <p>Number of vested coins</p>
                    <span>0.000 GMG</span>
                </div>
            </motion.div>
        </motion.div>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <BuyGmg/>
            </div>
            <div className={styles.griditems}>
                <div className={styles.tabDesign}>
                    <button className={styles.active}>All Transactions</button>
                    <button>Your Transactions</button>
                </div>
                <motion.div className={styles.allCardDesign} variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                   {
                    [...Array(4)].map((_, index)=> {
                        return(
                             <motion.div className={styles.mainCard} key={index} variants={listItemVariants}>
                        <div className={styles.icons}>
                            <img src={TransferIcon} alt='TransferIcon'/>
                        </div>
                        <div>
                            <div className={styles.linkIcon}>
                                <p>0x3A....2194</p>
                                <SharePrimaryIcon/>
                            </div>
                            <div className={styles.twoContent}>
                                <p>GMG Bought: 1 GMG</p>
                                <p>Bought With: 1 BNB</p>
                            </div>
                        </div>
                    </motion.div>
                        )
                    })
                   }
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  )
}
