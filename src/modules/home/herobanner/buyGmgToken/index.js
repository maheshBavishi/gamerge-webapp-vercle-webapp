import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./buyGmgToken.module.scss";
import Button from "@/components/button";
import Link from "next/link";

export default function BuyGmgToken() {
  // Set countdown target (7 days from now)
  const countdownDuration = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
  const [targetDate] = useState(() => Date.now() + countdownDuration);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  function getTimeLeft(target) {
    const now = Date.now();
    let diff = Math.max(target - now, 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;
    const seconds = Math.floor(diff / 1000);
    return { days, hours, minutes, seconds };
  }

  return (
    <motion.div
      className={styles.buyGmgToken}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className={styles.boxHeader}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Buy GMG Tokens</h2>
        <h3>in Presale Now</h3>
      </motion.div>
      <div className={styles.subBox}>
        <TimerUnit label="Days" value={timeLeft.days} />
        <TimerUnit label="Hours" value={timeLeft.hours} />
        <TimerUnit label="Minutes" value={timeLeft.minutes} />
        <TimerUnit label="Seconds" value={timeLeft.seconds} />
      </div>
      <div className={styles.liveContent}>
        <h4>Phase 1 is LIVE</h4>
        <div className={styles.textGrid}>
          <div className={styles.line}></div>
          <span>Price : 1 GMG = 0.01 USD</span>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.buttonAlignment}>
        <Button text="Buy Now" />
        <Link aria-label="presale" href="/presale">
          <button className={styles.whiteBtn}>Learn More</button>
        </Link>
      </div>
      <div className={styles.walletText}>
        <a href="https://t.me/jamesgamerge" target='_blank' aria-label="wallet">Don’t have a wallet?</a>
      </div>
    </motion.div>
  );
}

function TimerUnit({ label, value }) {
  const previousValueRef = useRef(String(value).padStart(2, "0"));
  const currentValueStr = String(value).padStart(2, "0");
  const previousValueStr = previousValueRef.current;

  useEffect(() => {
    previousValueRef.current = currentValueStr;
  }, [currentValueStr]);

  return (
    <div >
      <div >
        {currentValueStr.split("").map((digit, index) => {
          const hasChanged = digit !== previousValueStr[index];
          return (
            <AnimatePresence key={index} mode="wait" initial={false}>
              <motion.p
                key={digit}
                initial={hasChanged ? { y: 10, opacity: 0 } : false}
                animate={{ y: 0, opacity: 1 }}
                exit={hasChanged ? { y: -10, opacity: 0 } : false}
                transition={{ duration: 0.3 }}
                style={{ display: "inline-block", width: "1ch", textAlign: "center" }}
              >
                {digit}
              </motion.p>
            </AnimatePresence>
          );
        })}
      </div>
      <span>{label}</span>
    </div>
  );
}
