"use client"
import React from 'react'
import styles from './presaleBanner.module.scss';
import { motion } from 'framer-motion';
const PresaleVideo = '/assets/video/pesale-hero.mp4';
export default function PresaleBanner() {
  return (
    <>
    <div className={styles.presaleVideoContainer}>
      <div className={styles.blur}></div>
      <video src={PresaleVideo} alt="Play To Earn Crypto Games" loop muted autoPlay playsInline ></video>
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
        Join Gamerge’s GMG presale - A high potential <span> GameFi Crypto Token Presale </span> for 10x growth before listing, powering the next - gen gaming revolution. 
          </motion.p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
