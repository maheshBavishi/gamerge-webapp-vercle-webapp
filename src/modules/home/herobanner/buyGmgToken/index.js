import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./buyGmgToken.module.scss";
import Button from "@/components/button";
import Link from "next/link";
const BannerImage = '/assets/images/presale.png';

// Utility to calculate time left
function getTimeLeft(target) {
  const now = Date.now();
  let diff = Math.max(target - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= 1000 * 60 * 60 * 24;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= 1000 * 60 * 60;
  const minutes = Math.floor(diff / (1000 * 60));
  diff %= 1000 * 60;
  const seconds = Math.floor(diff / 1000);

  return { days, hours, minutes, seconds };
}

export default function BuyGmgToken() {
  const countdownDuration = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
  const [targetDate] = useState(() => Date.now() + countdownDuration);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setTimeLeft(getTimeLeft(targetDate));
      }, 1000);
      return () => clearInterval(interval);
    }, 100); // Small delay to allow LCP
    return () => clearTimeout(timeout);
  }, [targetDate]);

  return (
    <div className={styles.buyGmgTokenMain}>
      <div className={styles.bannerSTyle}>
        <img src={BannerImage} alt="BannerImage" />
      </div>
      <div className={styles.buyGmgToken}>

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
          <h4>Phase 2 is LIVE</h4>
          <div className={styles.textGrid}>
            <div className={styles.line}></div>
            <span>Price : 1 GMG = 0.02 USD</span>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.buttonAlignment}>
          <Button text="Buy Now" />
          <Link href="/presale" aria-label="presale">
            <button className={styles.whiteBtn}>Learn More</button>
          </Link>
        </div>

        <div className={styles.walletText}>
          <a
            href="https://t.me/jamesgamerge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="wallet"
          >
            Don’t have a wallet?
          </a>
        </div>
      </div>
    </div>
  );
}

// Memoized TimerUnit to avoid rerenders
const TimerUnit = React.memo(function TimerUnit({
  label,
  value,
}) {
  const previousValueRef = useRef(String(value).padStart(2, "0"));
  const currentValueStr = String(value).padStart(2, "0");
  const previousValueStr = previousValueRef.current;

  useEffect(() => {
    previousValueRef.current = currentValueStr;
  }, [currentValueStr]);

  return (
    <div className={styles.timerUnit}>
      <div className={styles.timerDigits}>
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
                className={styles.timerDigit}
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
});
