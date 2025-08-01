'use client'
import React from 'react'
import styles from './listedOfContent.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CoinGabbarIcon = '/assets/images/coin-gabbar.png';
const IcoholderIcon = '/assets/images/icoholder.svg';
const QuillAuditsIcon = '/assets/images/quillAudits.svg';
const CertikIcon = '/assets/images/certik.svg';

export default function ListedOfContent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <div className={styles.listedOfContent} ref={ref}>
      <div className='container-xs'>
        <div className={styles.grid}>
          <motion.div
            className={styles.griditems}
            initial="hidden"
            animate={controls}
            variants={textVariant}
          >
            <motion.h3 variants={textVariant}>
              We are listed on
            </motion.h3>
            <div className={styles.twoContentalignment}>
              <motion.div className={styles.listBox} variants={iconVariant}>
                <a aria-label='link' href='https://www.coingabbar.com/en/crypto-ico-details/gamerge-latest-ico-token-gamefi-project' target='_blank'>
                <img src={CoinGabbarIcon} alt='CoinGabbarIcon'/>
                </a>
              </motion.div>
              <motion.div className={styles.listBox} variants={iconVariant}>
                <a aria-label='link' href='https://icoholder.com/en/gamerge-1090860' target='_blank'>
                <img src={IcoholderIcon} alt='IcoholderIcon'/>
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className={styles.griditems}
            initial="hidden"
            animate={controls}
            variants={textVariant}
          >
            <motion.h3 variants={textVariant}>
              Audited By
            </motion.h3>
            <div className={styles.twoContentalignment}>
              <motion.div className={styles.listBox} variants={iconVariant}>
               <a href='https://www.quillaudits.com/leaderboard/gamerge' target='_blank' aria-label='QuillAudits'> <img src={QuillAuditsIcon} alt='QuillAuditsIcon'/></a>
              </motion.div>
              <motion.div className={styles.listBox} variants={iconVariant}>
               <a href='https://skynet.certik.com/projects/gamerge' target='_blank' aria-label='certik'> <img src={CertikIcon} alt='CertikIcon'/></a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
