import React from "react";
import styles from "./burningResults.module.scss";
import BurningIcon from "@/components/icons/burningIcon";
import { formatNumber } from "@/utils";
import LazyImage from "@/lazyImage";
const VecImage = "/assets/images/graphs.png";
export default function BurningResults({ gameplays, tokensBurnt, remainingSupply, TOTAL_SUPPLY, burnPercentage }) {
  // const percentage = Math.min(100, (value / maxValue) * 100);

  return (
    <div className={styles.burningResults}>
      <div className={styles.vecAlignment}>
        <LazyImage
          image={{
            src: VecImage,
            alt: 'Crypto Rewards',
          }} />
      </div>
      <div className={styles.iconText}>
        <BurningIcon />
        <h3>Burning Results</h3>
      </div>
      <div className={styles.cardGrid}>
        <div className={styles.cardGridItems}>
          <div className={styles.cardHeaderAlignment}>
            <span>Tokens Burned</span>
            <p>{formatNumber(tokensBurnt)} GMG</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.active} style={{ width: `${Math.min(100, (tokensBurnt / TOTAL_SUPPLY) * 100)}%` }}></div>

          </div>
        </div>
        <div className={styles.cardGridItems}>
          <div className={styles.cardHeaderAlignment}>
            <span>Remaining Supply</span>
            <p>{formatNumber(remainingSupply)} GMG</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.active} style={{ width: `${Math.min(100, (remainingSupply / TOTAL_SUPPLY) * 100)}%` }}></div>
          </div>
        </div>
        <div className={styles.cardGridItems}>
          <div className={styles.cardHeaderAlignment}>
            <span>Supply Reduction</span>
            <p>{burnPercentage.toFixed(4)}%</p>
          </div>
          <div className={styles.progress}>
            <div className={styles.active} style={{ width: `${Math.min(100, (burnPercentage / 100) * 100)}%` }}></div>

          </div>
        </div>
      </div>
      <div className={styles.titleDetails}>
        <h4>What does this mean?</h4>
        <p>
          With {formatNumber(gameplays)} games played, a total of <span className="text-orange-400 font-medium">{formatNumber(tokensBurnt)} GMG</span>{" "}
          tokens would be permanently burned, reducing the total supply by{" "}
          <span className="text-orange-400 font-medium">{burnPercentage.toFixed(4)}%</span>. This deflationary mechanism helps maintain token value
          over time.
        </p>
      </div>
    </div>
  );
}
