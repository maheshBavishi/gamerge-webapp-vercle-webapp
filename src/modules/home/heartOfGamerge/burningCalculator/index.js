"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./burningCalculator.module.scss";
import BurningIcon from "@/components/icons/burningIcon";
import CalculationFormula from "../calculationFormula";
import { formatNumber } from "@/utils";
export default function BurningCalculator({ gameplays, MAX_GAMEPLAYS, setGameplays, TOKENS_PER_GAME, tokensBurnt }) {
  return (
    <div className={styles.burningCalculator}>
      <div className={styles.grid}>
        <div className={styles.griditems}>
          <div className={styles.iconText}>
            <BurningIcon />
            <h3>Burning Calculator</h3>
          </div>
          <div className={styles.numberofText}>
            <p>Number of Gameplays</p>
            <div className={styles.slidecontainer}>
              <input
                type="range"
                className={styles.slider}
                id="myRange"
                value={[gameplays]}
                max={MAX_GAMEPLAYS}
                step={1000}
                onChange={(e) => setGameplays(Number(e.target.value))}
              />
            </div>
            <div className={styles.twoContentAlignment}>
              <span>0</span>
              <span>{formatNumber(MAX_GAMEPLAYS)}</span>
            </div>
          </div>
        </div>
        <div className={styles.griditems}>
          <CalculationFormula gameplays={gameplays} TOKENS_PER_GAME={TOKENS_PER_GAME} tokensBurnt={tokensBurnt} />
        </div>
        <div className={styles.griditems}>
          <div>
            <h4>{formatNumber(tokensBurnt)}</h4>
            <span>Tokens Burned</span>
          </div>
        </div>
      </div>
    </div>
  );
}
