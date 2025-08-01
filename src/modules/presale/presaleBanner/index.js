"use client"
import React from 'react'
import styles from './presaleBanner.module.scss';
import { motion } from 'framer-motion';
export default function PresaleBanner() {
  return (
    <div className={styles.presaleBanner}>
      <div className='container-md'>
        <div className={styles.headingText}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            World’s Best <span>GameFi </span> Token Presale 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join Gamerge’s GMG presale — a high-potential GameFi token poised for 10X growth before listing, powering the 
            next-gen gaming revolution.
          </motion.p>
        </div>
      </div>
    </div>
  )
}
