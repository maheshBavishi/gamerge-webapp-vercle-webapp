import React from 'react'
import styles from './buyGmg.module.scss';
import DownIconWhite from '@/components/icons/downIconWhite';
import Button from '@/components/button';
const BnbIcon = '/assets/icons/bnb.svg';
export default function BuyGmg() {
  return (
    <div className={styles.buyGmgSection}>
      <h3>
        Buy GMG
      </h3>
      <div className={styles.subbox}>
        <div className={styles.inputDesign}>
            <label>You Pay</label>
            <div className={styles.relative}>
                <input type='number' placeholder='0'/>
                <div className={styles.rightContent}>
                    <button>
                        <img src={BnbIcon} alt='BnbIcon'/>
                        <span>BNB</span>
                        <DownIconWhite/>
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.inputDesign}>
            <label>You Get</label>
            <div className={styles.relative}>
                <input type='number' placeholder='0'/>
                <div className={styles.rightContent}>
                  <p>GMG</p>
                </div>
            </div>
        </div>
        <div className={styles.total}>
          <p>0 BNB = 0 GMG</p>
        </div>
      </div>
        <div className={styles.buttonAlignment}>
          <Button text="Buy With BNB"/>
        </div>
    </div>
  )
}
