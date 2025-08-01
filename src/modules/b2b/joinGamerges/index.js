'use client'
import React from 'react'
import styles from './joinGamerges.module.scss';
import Button from '@/components/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function JoinGamerges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      className={styles.joinGamerges}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='container-md'>
        <motion.div
          className={styles.box}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
                Join gamerge’s staking revolution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
               Turn your free time into crypto rewards with fun, skill-based games you can play anytime, anywhere. Our app lets you dive into exciting gameplay and earn real tokens 
               with every win. 
            </motion.p>
            <motion.div
              className={styles.btnCenter}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            >
                <Button text="Contact Sales" fillwhite />
            </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
