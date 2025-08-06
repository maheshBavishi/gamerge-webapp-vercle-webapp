'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './button.module.scss';
import classNames from 'classnames';

export default function Button({ text, fillwhite = false, onClick }) {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [entryPoint, setEntryPoint] = useState({ x: 0.5, y: 0.5 });

  const transition = { duration: 0.4, ease: 'easeInOut' };

  const handleMouseEnter = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setEntryPoint({ x, y });
    }
    setIsHovered(true);
  };

  return (
    <motion.div
      className={classNames(styles.button, fillwhite ? styles.fillwhite : '')}
    >
      <motion.button
        ref={buttonRef}
        aria-label={text}
        className={styles.animatedButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{ color: isHovered ? '#000' : '#1A1A1A' }}
        transition={transition}
      >
        {/* Static background */}
        <span
          className={styles.backgroundLayer}
          style={{ backgroundColor: fillwhite ? '#fff' : '#00FF7F' }}
        />

        {/* Animated fill */}
        <motion.div
          className={styles.fillLayer}
          style={{ backgroundColor: fillwhite ? '#00FF7F' : '#01DC6E' }}
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{
            clipPath: isHovered
              ? `circle(150% at ${entryPoint.x * 100}% ${entryPoint.y * 100}%)`
              : `circle(0% at ${entryPoint.x * 100}% ${entryPoint.y * 100}%)`,
          }}
          transition={transition}
        />

        {/* Text */}
        <motion.span
          className={styles.buttonText}
          animate={{ color: isHovered ? '#000' : '#1A1A1A' }}
          transition={transition}
        >
          {text}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
