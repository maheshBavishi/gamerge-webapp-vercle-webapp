'use client'
import React from 'react'
import styles from './earnUsdt.module.scss';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAccount } from 'wagmi';
import { toast } from 'react-hot-toast';
import CustomConnectButton from '@/components/connectButton';

const InstantlyImage = '/assets/images/Instantly.png';
const StarOne = '/assets/images/small-star.png';
const StarTwo = '/assets/images/lg-star.png';
const StarThree = '/assets/images/sm-star.png';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }
};

const starVariants = {
  initial: {
    opacity: 0,
    rotateY: 0,
    scale: 1,
  },
  animate: (i) => ({
    opacity: [0, 1, 0],
    rotateY: [0, 180, 0],
    scale: [1, 1.3, 1],
    transition: {
      delay: i * 0.5,
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

export default function EarnUsdt() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { address, isConnected } = useAccount();

  const handleStartSharing = () => {
    if (!isConnected || !address) {
      toast.error('Please connect your wallet first');
      return;
    }

    const domain = window.location.origin;
    const referralLink = `${domain}/presale?referral=${address}`;

    navigator.clipboard.writeText(referralLink).then(() => {
      toast.success('Referral link copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy referral link');
    });
  };

  return (
    <div className={styles.earnUsdt} ref={ref}>
      <div className='container-md'>
        <div className={styles.box}>
          <motion.div
            className={styles.content}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h2>
              Earn USDT
              <span> Instantly </span> By
              Sharing GMG
            </h2>
            <p>
              Your referral link is always ready. Earn instant cashback in USDT BEP-20 once the refer and earn system
              activates for you.
            </p>
            {!isConnected ? (
              <CustomConnectButton fillwhite />
            ) : (

              <Button text="Copy Referral Link" fillwhite onClick={handleStartSharing} />

            )}
          </motion.div>
          <motion.div
            className={styles.relativeDiv}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className={styles.image}>
              <img src={InstantlyImage} alt='Buy GMG Tokens' />
            </div>
            <motion.div
              className={styles.starOne}
              custom={0}
              variants={starVariants}
              initial="initial"
              animate="animate"
            >
              <img src={StarOne} alt="Refer And Earn" />
            </motion.div>

            <motion.div
              className={styles.starTwo}
              custom={1}
              variants={starVariants}
              initial="initial"
              animate="animate"
            >
              <img src={StarTwo} alt="Web3 Gaming Platform" />
            </motion.div>

            <motion.div
              className={styles.starThree}
              custom={2}
              variants={starVariants}
              initial="initial"
              animate="animate"
            >
              <img src={StarThree} alt="GameFi Aggregator Platform" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
