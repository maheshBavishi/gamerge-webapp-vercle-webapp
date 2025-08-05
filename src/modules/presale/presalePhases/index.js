"use client"
import React, { useEffect, useState } from 'react';
import styles from './presalePhases.module.scss';
import { useReadAllPresales } from '../../../lib/hooks/use-read-all-presales';
import { formatToken, formatUSD } from '../../../utils';

export default function PresalePhases() {
  const [isVisible, setIsVisible] = useState(false);

  const { allPresalesQuery } = useReadAllPresales();
  const { data: phases, isPending } = allPresalesQuery;

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

  if (isPending) {
    return <div>Loading presale phases...</div>;
  }

  const phasesData = [1, 2, 3].map(stage => phases?.find(p => p.presaleInfo.presaleStage === stage));

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
            {[0, 1, 2].map((index) => {
              const phase = phasesData[index];
              const isActive = phase && phase.isPresaleStarted;
              return (
                <div key={index} className={`${styles.griditems} ${styles.cardAnimation}`}>
                  <div>
                    <div className={styles.cardHeader}>
                      <p>Phase {index + 1}</p>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.text}>
                        <p>Token Allocation</p>
                        <span>{isActive ? `${formatToken(phase.presaleInfo.allocation)} GMG` : 'Coming Soon'}</span>
                      </div>
                      <div className={styles.text}>
                        <p>Presale Stage</p>
                        <span>{isActive ? 'Active' : 'Coming Soon'}</span>
                      </div>
                      <div className={styles.text}>
                        <p>Lock-In Period</p>
                        <span>{isActive ? `${phase.presaleInfo.cliffPeriod.toString()} Hours` : 'Coming Soon'}</span>
                      </div>
                      <div className={styles.text}>
                        <p>Vesting Schedule</p>
                        <span>{isActive ? `After lock-in, monthly vesting for ${phase.presaleInfo.vestingMonths} months` : 'Coming Soon'}</span>
                      </div>
                      <div className={styles.text}>
                        {isActive ? (
                          <p>1 GMG = ${formatUSD(phase.presaleInfo.pricePerToken)} USD</p>
                        ) : (
                          <p>Price Coming Soon</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    <button className={isActive ? styles.active : ''}>
                      Go To Presale
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.borderBottom}></div>
    </>
  );
}
