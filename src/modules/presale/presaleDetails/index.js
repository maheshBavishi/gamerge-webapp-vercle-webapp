'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styles from './presaleDetails.module.scss';
import BuyGmg from './buyGmg';
import CustomConnectButton from '@/components/connectButton';
import SharePrimaryIcon from '@/components/icons/sharePrimaryIcon';
import { useReadPresale } from '@/lib/hooks/use-read-presale';
const WalletIcon = '/assets/icons/wallet.svg';
import { useTransactionsOfPresale } from "@/lib/hooks/use-transactions-of-presale"
import { useTransactionsOfUser } from "@/lib/hooks/use-transactions-of-user"
const PriceIcon = '/assets/icons/price.svg';
const CoinsIcon = '/assets/icons/coins.svg';
import { formatToken, formatNumber, shortenHash } from "@/utils"
import { useAccount } from 'wagmi';
import LazyImage from '@/lazyImage';

const TransferIcon = '/assets/icons/transfer.svg';
export default function PresaleDetails({ address }) {
  const { data: presaleData } = useReadPresale(address);
  const progressPercentage = presaleData?.gmgBought && presaleData?.presaleInfo?.allocation
    ? (Number(presaleData.gmgBought) / Number(presaleData.presaleInfo.allocation)) * 100
    : 0;

  const { address: userAddress } = useAccount()
  const { data: transactions } = useTransactionsOfPresale(address);
  const { data: yourTransactions } = useTransactionsOfUser(address, userAddress);
  const [activeTab, setActiveTab] = useState('all');

  // Select transactions based on active tab
  const displayTransactions = activeTab === 'all' ? transactions : yourTransactions;
  console.log([presaleData, userAddress])

  console.log({
    activeTab,
    transactions: transactions?.length || 0,
    yourTransactions: yourTransactions?.length || 0,
    displayTransactions: displayTransactions?.length || 0,
    userAddress
  });
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
          <p>Phase 2</p>
          <div className={styles.line}>
            <div className={styles.active} style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <span>{presaleData?.gmgBought ? formatNumber(formatToken(presaleData.gmgBought)) : '0'} GMG</span>
        </div>
        <motion.div className={styles.cardGrid} variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className={styles.cardGriditems} variants={cardVariants}>
            <div className={styles.icon}>
              <LazyImage
                image={{
                  src: WalletIcon,
                  alt: 'GameFi Ecosystem',
                }} />
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
                  <span>
                    <p style={{ marginBottom: '4px' }}>Connect wallet to show balance</p>
                  </span>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div className={styles.cardGriditems} variants={cardVariants}>
            <div className={styles.icon}>
              <LazyImage
                image={{
                  src: PriceIcon,
                  alt: 'Web3 Gaming',
                }} />
            </div>
            <div>
              <p>GMG Pre-Sale Price</p>
              <span>0.02 USD</span>
            </div>
          </motion.div>
          <motion.div className={styles.cardGriditems} variants={cardVariants}>
            <div className={styles.icon}>
              <LazyImage
                image={{
                  src: CoinsIcon,
                  alt: 'Decentralized Gaming Platform',
                }} />
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
                  <p style={{ marginBottom: '4px' }}>Connect wallet to show vested coins</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
        <div className={styles.grid}>
          <div className={styles.griditems}>
            <BuyGmg address={address} presaleData={presaleData} />
          </div>
          <div className={styles.griditems}>
            <div className={styles.tabDesign}>
              <button
                className={activeTab === 'all' ? styles.active : ''}
                onClick={() => setActiveTab('all')}
              >
                All Transactions
              </button>
              <button
                className={activeTab === 'your' ? styles.active : ''}
                onClick={() => setActiveTab('your')}
              >
                Your Transactions
              </button>
            </div>
            <motion.div key={activeTab} className={styles.allCardDesign} variants={listContainerVariants} initial="hidden" animate="visible">
              {
                displayTransactions?.length > 0 ? (
                  displayTransactions.map((transaction, index) => {
                    return (
                      <motion.div className={styles.mainCard} key={transaction.transactionHash} variants={listItemVariants}>
                        <div className={styles.icons}>
                          <LazyImage
                            image={{
                              src: TransferIcon,
                              alt: 'TransferIcon',
                            }} />
                        </div>
                        <div>
                          <div className={styles.linkIcon}>
                            <p>{shortenHash(transaction.buyer)}</p>
                            <a
                              href={`https://bscscan.com/tx/${transaction.transactionHash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ cursor: 'pointer' }}
                            >
                              <SharePrimaryIcon />
                            </a>
                          </div>
                          <div className={styles.twoContent}>
                            <p>GMG Bought: {formatNumber(formatToken(transaction.gmgBought))} GMG</p>
                            <p>Bought With: {formatNumber(Number(transaction.amount) / 1e18)} {transaction.token}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
                    {activeTab === 'your' && !userAddress
                      ? 'Connect wallet to view your transactions'
                      : displayTransactions === null || displayTransactions === undefined
                        ? 'Loading transactions...'
                        : `No ${activeTab === 'your' ? 'personal' : ''} transactions found`
                    }
                  </div>
                )
              }
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
