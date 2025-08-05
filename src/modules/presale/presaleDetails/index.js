'use client';
import React from 'react'
import { motion } from 'framer-motion';
import styles from './presaleDetails.module.scss';
import BuyGmg from './buyGmg';
import CustomConnectButton from '@/components/connectButton';
import SharePrimaryIcon from '@/components/icons/sharePrimaryIcon';
import { useReadPresale } from '@/lib/hooks/use-read-presale';
const WalletIcon = '/assets/icons/wallet.svg';
const PriceIcon = '/assets/icons/price.svg';
const CoinsIcon = '/assets/icons/coins.svg';
import { formatToken, formatNumber } from "@/utils"
import { useAccount } from 'wagmi';
const TransferIcon = '/assets/icons/transfer.svg';
export default function PresaleDetails({ address }) {
  const { data: presaleData } = useReadPresale(address);
  const progressPercentage = presaleData?.gmgBought && presaleData?.presaleInfo?.allocation
    ? (Number(presaleData.gmgBought) / Number(presaleData.presaleInfo.allocation)) * 100
    : 0;
  const { address: userAddress } = useAccount()
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
            <div className={styles.active} style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <span>{presaleData?.gmgBought ? formatNumber(formatToken(presaleData.gmgBought)) : '0'} GMG</span>
        </div>
        <motion.div className={styles.cardGrid} variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className={styles.cardGriditems} variants={cardVariants}>
            <div className={styles.icon}>
              <img src={WalletIcon} alt='WalletIcon' />
            </div>
            <div>
              <p>Your Total GMG Balance</p>
              {userAddress ? (
                <span>
                  {presaleData?.participants?.totalGMG
                    ? `${formatToken(presaleData.participants.totalGMG)} GMG`
                    : '0.000 GMG'}
                </span>
              ) : (
                <div style={{ marginTop: '8px' }}>
                  {/* Show connect wallet button if not connected */}
                  <span>
                    <p style={{ marginBottom: '4px' }}>Connect wallet to show balance</p>
                    {/* Import and use CustomConnectButton */}
                    <div style={{ display: 'inline-block' }}>
                      {/* Use CustomConnectButton with fillwhite for style consistency */}

                    </div>
                  </span>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div className={styles.cardGriditems} variants={cardVariants}>
            <div className={styles.icon}>
              <img src={PriceIcon} alt='PriceIcon' />
            </div>
            <div>
              <p>GMG Pre-Sale Price</p>
              <span>0.01 USD</span>
            </div>
          </motion.div>
          <motion.div className={styles.cardGriditems} variants={cardVariants}>
            <div className={styles.icon}>
              <img src={CoinsIcon} alt='CoinsIcon' />
            </div>
            <div>
              <p>Number of vested coins</p>
              {userAddress ? (
                <span>
                  {presaleData?.participants?.releaseOnTGE
                    ? `${formatToken(presaleData.participants.releaseOnTGE)} GMG`
                    : '0.000 GMG'}
                </span>
              ) : (
                <div style={{ marginTop: '8px' }}>
                  <span>
                    <p style={{ marginBottom: '4px' }}>Connect wallet to show vested coins</p>



                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
        <div className={styles.grid}>
          <div className={styles.griditems}>
            <BuyGmg />
          </div>
          <div className={styles.griditems}>
            <div className={styles.tabDesign}>
              <button className={styles.active}>All Transactions</button>
              <button>Your Transactions</button>
            </div>
            <motion.div className={styles.allCardDesign} variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {
                [...Array(4)].map((_, index) => {
                  return (
                    <motion.div className={styles.mainCard} key={index} variants={listItemVariants}>
                      <div className={styles.icons}>
                        <img src={TransferIcon} alt='TransferIcon' />
                      </div>
                      <div>
                        <div className={styles.linkIcon}>
                          <p>0x3A....2194</p>
                          <SharePrimaryIcon />
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
