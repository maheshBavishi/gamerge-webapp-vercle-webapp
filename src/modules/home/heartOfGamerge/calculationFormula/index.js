import React from "react";
import styles from "./calculationFormula.module.scss";
import RightIcon from "@/components/icons/rightIcon";
import { formatNumber } from "@/utils";
import LazyImage from "@/lazyImage";
const CloseIcon = "/assets/icons/close.svg";
export default function CalculationFormula({ gameplays, TOKENS_PER_GAME, tokensBurnt }) {
  return (
    <div className={styles.calculationFormula}>
      <h3>Calculation Formula:</h3>
      <div className={styles.buttonIconAlignment}>
        <button>{formatNumber(gameplays)} games</button>
        <LazyImage
          image={{
            src: CloseIcon,
            alt: "Buy GMG Tokens",
          }}
        />
        <button>{TOKENS_PER_GAME} tokens per game</button>
          <LazyImage
          image={{
            src: CloseIcon,
            alt: "Refer And Earn",
          }}
        />
        <button>5% burn rate</button>
        <RightIcon />
      </div>
      <div className={styles.btnDesign}>
        <button>{formatNumber(tokensBurnt)} GMG burned</button>
      </div>
    </div>
  );
}
