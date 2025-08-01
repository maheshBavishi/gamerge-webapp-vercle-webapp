"use client"
import React, { useEffect, useState } from 'react';
import styles from './presalePhases.module.scss';

export default function PresalePhases() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('presale-phases');
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight * 0.8) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="presale-phases" className={`${styles.presalePhases} ${isVisible ? styles.visible : ''}`}>
                <div className='container-md'>
                    <div className={styles.title}>
                        <h2 className={styles.titleAnimation}>
                            Presale Phases
                        </h2>
                    </div>
                    <div className={styles.grid}>
                        <div className={`${styles.griditems} ${styles.cardAnimation}`}>
                            <div>
                                <div className={styles.cardHeader}>
                                    <p>Phase 1</p>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.text}>
                                        <p>Token Allocation</p>
                                        <span>1000000 GMG</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Presale Stage</p>
                                        <span>Active</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Lock-In Period</p>
                                        <span>720 Hours</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Vesting Schedule</p>
                                        <span>After lock-in, monthly vesting for 36
                                            months</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>1 GMG = $0.010 USD</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <button className={styles.active}>
                                    Go To Presale
                                </button>
                            </div>
                        </div>
                        <div className={`${styles.griditems} ${styles.cardAnimation}`}>
                            <div>
                                <div className={styles.cardHeader}>
                                    <p>Phase 2</p>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.text}>
                                        <p>Token Allocation</p>
                                        <span>Coming Soon</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Presale Stage</p>
                                        <span>Coming Soon</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Lock-In Period</p>
                                        <span>Coming Soon</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Vesting Schedule</p>
                                        <span>Coming Soon</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Price Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <button >
                                    Go To Presale
                                </button>
                            </div>
                        </div>
                        <div className={`${styles.griditems} ${styles.cardAnimation}`}>
                            <div>
                                <div className={styles.cardHeader}>
                                    <p>Phase 3</p>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.text}>
                                        <p>Token Allocation</p>
                                        <span>Coming Soon</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Presale Stage</p>
                                        <span>Coming Soon</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Lock-In Period</p>
                                        <span>Coming Soon</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Vesting Schedule</p>
                                        <span>Coming Soon</span>
                                    </div>
                                    <div className={styles.text}>
                                        <p>Price Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <button >
                                    Go To Presale
                                </button>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className={styles.borderBottom}></div>
        </>
    );
}
