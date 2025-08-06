'use client'
import React from 'react';
import styles from './b2bBanner.module.scss';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import Beams from './bems';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

/**
 * B2B Banner component for the landing page
 * @returns {JSX.Element}
 */
export default function B2bBanner() {
  return (
    <>

      <div className={styles.bremsContainer}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#01DC6E"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
        <motion.div
          className={styles.b2bBanner}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="B2B Banner"
        >
          <div className="container-md">
            <motion.div className={styles.text} variants={containerVariants}>
              <motion.h1 variants={itemVariants} tabIndex={0}>
                <span>Gaming Utility </span> To your crypto project on gamerge
              </motion.h1>
              <motion.p variants={itemVariants} tabIndex={0}>
                Unlock Instant GameFi Utility for Your Crypto Token — Go Live in 24 Hours with Gamerge’s Powerful Multichain
                B2B Integration
              </motion.p>
              <motion.div className={styles.twoButtonAlignment} variants={itemVariants}>
                <Button fillwhite text="List Your Token" aria-label="List Your Token" />
                <Button text="Explore B2B Solutions" aria-label="Explore B2B Solutions" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
B2bBanner.propTypes = {};

