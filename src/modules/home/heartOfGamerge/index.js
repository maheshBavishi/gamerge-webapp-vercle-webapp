"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./heartOfGamerge.module.scss";
import DownIcon from "@/components/icons/downIcon";
import BurningCalculator from "./burningCalculator";
import BurningResults from "./burningResults";
import BurningWorks from "./burningWorks";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeartOfGamerge() {
  // Calculator state   s
  const [gameplays, setGameplays] = useState(1000);
  const flameContainerRef = useRef(null);

  // Constants
  const TOTAL_SUPPLY = 100_000_000;
  const MAX_GAMEPLAYS = 1_000_000;
  const TOKENS_PER_GAME = 100;
  const BURN_RATE = 0.05; // 5%

  // Calculatio
  const tokensBurnt = gameplays * BURN_RATE * TOKENS_PER_GAME;
  const remainingSupply = TOTAL_SUPPLY - tokensBurnt;
  const burnPercentage = (tokensBurnt / TOTAL_SUPPLY) * 100;

  // Create flames when slider changes
  useEffect(() => {
    if (!flameContainerRef.current) return;

    // Create a flame element
    const createFlame = () => {
      if (!flameContainerRef.current) return;

      const flame = document.createElement("div");
      flame.className = "flame-particle";

      // Random position within the container
      const containerWidth = flameContainerRef.current.offsetWidth;
      const randomX = Math.random() * containerWidth;

      // Set flame properties
      flame.style.left = `${randomX}px`;
      flame.style.bottom = "0";
      flame.style.opacity = "1";

      // Random size
      const size = 20 + Math.random() * 30;
      flame.style.width = `${size}px`;
      flame.style.height = `${size * 1.5}px`;

      // Random animation duration
      const duration = 1 + Math.random() * 2;
      flame.style.animationDuration = `${duration}s`;

      // Add to container
      flameContainerRef.current.appendChild(flame);

      // Remove after animation completes
      setTimeout(() => {
        if (flame.parentNode) {
          flame.parentNode.removeChild(flame);
        }
      }, duration * 1000);
    };

    // Create flames based on burn intensity
    const flameInterval = setInterval(() => {
      // Number of flames based on burn percentage
      const flameCount = Math.max(1, Math.floor(burnPercentage / 5));

      for (let i = 0; i < flameCount; i++) {
        createFlame();
      }
    }, 200);

    return () => clearInterval(flameInterval);
  }, [burnPercentage]);
  return (
    <motion.div
      className={styles.heartOfGamerge}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container-lg">
        <motion.div className={styles.titleIconAlignment} variants={itemVariants}>
          <DownIcon />
          <h2>GMG- Heart of Gamerge Ecosystem</h2>
        </motion.div>
        <motion.div className={styles.textContent} variants={itemVariants}>
          <p>Every 1v1 match on Gamerge burns GMG tokens, reducing supply, rewarding players, and boosting long-term token value.</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <BurningCalculator
            gameplays={gameplays}
            MAX_GAMEPLAYS={MAX_GAMEPLAYS}
            setGameplays={setGameplays}
            TOKENS_PER_GAME={TOKENS_PER_GAME}
            tokensBurnt={tokensBurnt}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <BurningResults gameplays={gameplays} tokensBurnt={tokensBurnt} remainingSupply={remainingSupply} TOTAL_SUPPLY={TOTAL_SUPPLY} burnPercentage={burnPercentage} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <BurningWorks />
        </motion.div>
      </div>
    </motion.div>
  );
}
