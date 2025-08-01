'use client'
import React from 'react'
import styles from './ambassadorProgramBanner.module.scss';
import { motion } from 'framer-motion';
export default function AmbassadorProgramBanner() {
  return (
    <div>
       <div className={styles.ambassadorProgram}>
      <div className='container-md'>
        <div className={styles.title}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
                What is the Gamerge <span>Ambassador</span> Program?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
                Gamerge is building a decentralized gaming ecosystem powered by the $GMG token. The Ambassador Program invites community members to become active promoters and contributors, helping to grow the Gamerge platform and 
                its community.
            </motion.p>
        </div>
      </div>
    </div>
    </div>
  )
}
