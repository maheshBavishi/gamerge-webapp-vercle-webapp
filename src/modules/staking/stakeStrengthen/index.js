'use client'
import React from 'react'
import styles from './stakeStrengthen.module.scss';
import DownIcon from '@/components/icons/downIcon';
const StakeImage = '/assets/images/stake-img.png';
// Add Framer Motion imports
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StakeStrengthen() {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const textControls = useAnimation();
  React.useEffect(() => {
    if (textInView) {
      textControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
    }
  }, [textInView, textControls]);

  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const imgControls = useAnimation();
  React.useEffect(() => {
    if (imgInView) {
      imgControls.start({ opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } });
    }
  }, [imgInView, imgControls]);

  return (
    <div className={styles.stakeStrengthen}>
      <div className='container-md'>
        <div className={styles.grid}>
            <motion.div
              className={styles.griditems}
              ref={textRef}
              initial={{ opacity: 0, y: 40 }}
              animate={textControls}
            >
                <DownIcon/>
                <h2>
                    Stake & Strengthen the Gamerge Ecosystem
                </h2>
                <p>
                    By staking GMG, you’re not just earning — you’re fueling the engine of the Gamerge platform, helping us maintain a sustainable, deflationary economy and expand the reach of our Play-to-Earn and 
                    referral-based rewards.
                </p>
            </motion.div>
            {/* Animated image block */}
            <motion.div
              className={styles.griditems}
              ref={imgRef}
              initial={{ opacity: 0, x: 60 }}
              animate={imgControls}
            >
                <div className={styles.image}>
                    <img src={StakeImage} alt='StakeImage'/>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

