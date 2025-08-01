'use client'
import React, { useState, useRef } from 'react'
import styles from './cryptoContent.module.scss';
import { motion } from 'framer-motion';
const CryptoImage = '/assets/images/crypto.png';
const LayerImage = '/assets/images/layer1.png';

export default function CryptoContent() {
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setLensPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setShowLens(true);
  };

  const handleMouseLeave = () => {
    setShowLens(false);
  };

  return (
    <motion.div
      className={styles.cryptoContent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.LayerImage}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.img
          className={styles.zoomIn}
          src={LayerImage}
          alt='LayerImage'
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.div>
      <div className='container-md'>
        <div className={styles.grid}>
          <motion.div
            className={styles.griditems}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
          >
            <motion.p
              className={styles.fadeInUp}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              style={{
                maskImage: showLens ? `radial-gradient(circle at ${lensPosition.x}px ${lensPosition.y}px, transparent 99px, black 100px)` : 'none',
                WebkitMaskImage: showLens ? `radial-gradient(circle at ${lensPosition.x}px ${lensPosition.y}px, transparent 99px, black 100px)` : 'none',
              }}
            >
              <span>Gamerge </span> bridges the gap between fun and finance. Our platform offers
              <span>skill-based crypto games</span>, token utilities, and a thriving community. Build, earn, and 
              grow with us.
            </motion.p>
            
            {showLens && (
              <motion.p
              className={`${styles.fadeInUp} ${styles.magnifiedText}`}
                style={{
                  fontSize: '40px',
                  clipPath: `circle(100px at ${lensPosition.x}px ${lensPosition.y}px)`,
                  transform: `translate(-${lensPosition.x}px, -${lensPosition.y}px) scale(1.2)`,
                }}
              >
                <span>Gamerge </span> bridges the gap between fun and finance. Our platform offers
                <span>skill-based crypto games</span>, token utilities, and a thriving community. Build, earn, and 
                grow with us.
              </motion.p>
            )}
          </motion.div>
          <motion.div
            className={styles.griditems}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.image}>
              <motion.img
                className={styles.zoomIn}
                src={CryptoImage}
                alt='CryptoImage'
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
