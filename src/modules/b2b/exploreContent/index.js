'use client'
import React from 'react'
import styles from './exploreContent.module.scss';
import Infiegration from '@/components/icons/infiegration';
import SupportIcon from '@/components/icons/supportIcon';
import FeesIcon from '@/components/icons/feesIcon';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

export default function ExploreContent() {
  return (
    <motion.div
      className={styles.exploreContentAlignment}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='container-md'>
        <div className={styles.contentalignment}>
          <motion.div className={styles.iconTxt} variants={itemVariants}>
            <Infiegration/>
            <span>1-Day Integration</span>
          </motion.div>
          <motion.div className={styles.iconTxt} variants={itemVariants}>
            <SupportIcon/>
            <span>Multichain Support</span>
          </motion.div>
          <motion.div className={styles.iconTxt} variants={itemVariants}>
            <FeesIcon/>
            <span>Minimal Fees</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
