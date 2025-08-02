import React from 'react'
import styles from './burningWorks.module.scss';
export default function BurningWorks() {
    return (
        <div className={styles.burningWorksAlignment}>
            <div className={styles.title}>
                <h3>How GMG Burning Works?</h3>
            </div>
            <div className={styles.card}>
                <div className={styles.cardItems}>
                    <div className={styles.counter}>1</div>
                    <h4>Game Staking</h4>
                    <p>
                        Players stake GMG tokens when
                        participating in 1v1 matches on the
                        Gamerge platform.
                    </p>
                </div>
                <div className={styles.cardItems}>
                    <div className={styles.counter}>2</div>
                    <h4>Token Burning</h4>
                    <p>
                        5% of the staked tokens are permanently
                        removed from circulation after each match.
                    </p>
                </div>
                <div className={styles.cardItems}>
                    <div className={styles.counter}>3</div>
                    <h4>Increasing Value</h4>
                    <p>
                        As supply decreases over time, each
                        remaining token potentially becomes more
                        valuable, rewarding holders.
                    </p>
                </div>
            </div>
        </div>
    )
}
