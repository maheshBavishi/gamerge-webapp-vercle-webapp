import React from 'react'
import styles from './riskDisclosure.module.scss';
import DownIcon from '@/components/icons/downIcon';
export default function RiskDisclosure() {
  return (
    <div className={styles.riskDisclosure}>
      <div className='container-md'>
        <div className={styles.headingText}>
          <DownIcon />
          <h1>
            Risk Disclosure
          </h1>
        </div>
        <div className={styles.content}>
          <p>
            This Risk Disclosure document is intended to inform users of the risks associated with using Gamerge, a crypto gaming platform that hosts multiple games, including Flappy Fox. By participating in Gamerge, you acknowledge and accept the risks
            outlined below.
          </p>
        </div>
        <div className={styles.content}>
          <h2>1. Cryptocurrency Volatility</h2>
          <p>Cryptocurrencies used on Gamerge, including for staking and entry fees, are subject to high market volatility. The value of cryptocurrencies may fluctuate significantly, resulting in potential losses. Users should only use funds they can afford to lose.</p>
        </div>
        <div className={styles.content}>
          <h2>2. Risk of Loss
          </h2>
          <p>Gamerge involves various forms of gameplay, including PvP matches and tournaments, which require staking cryptocurrency. Users may lose their staked amount if they do not win. Participation is at the user's own risk, and there is no guarantee of earnings or winning outcomes.</p>
        </div>
        <div className={styles.content}>
          <h2>3. Blockchain Risks</h2>
          <p>Transactions on Gamerge are facilitated through blockchain technology. Blockchain networks may experience delays, congestion, or technical issues that may affect gameplay or transactions. Gamerge is not liable for any losses resulting from such issues.</p>
        </div>
        <div className={styles.content}>
          <h2>4. Security Risks</h2>
          <p>While Gamerge takes steps to secure user funds and accounts, using cryptocurrency inherently involves certain security risks, including potential hacking or unauthorized access. Users are responsible for maintaining the security of their wallets and personal information.</p>
        </div>
        <div className={styles.content}>
          <h2>5. Regulatory Risk</h2>
          <p>The use of cryptocurrencies is subject to varying regulations across different jurisdictions. Changes in legal or regulatory frameworks may impact the use of Gamerge, including the availability of certain features or services.</p>
        </div>
        <div className={styles.content}>
          <h2>6. Platform Risks</h2>
          <p>Gamerge reserves the right to modify game rules, fees, or platform features at any time. Such changes may impact users' gameplay experience, staked amounts, or rewards.</p>
        </div>
        <div className={styles.content}>
          <h2>7. No Financial Advice</h2>
          <p>Gamerge does not provide financial or investment advice. Participation in cryptocurrency-based games involves inherent risks, and users should consult with financial professionals if they are uncertain about the risks involved.
          </p>
        </div>
        <div className={styles.content}>
          <h2>8. Acknowledgment of Risk</h2>
          <p>By using Gamerge, you acknowledge that you understand and accept all the risks associated with cryptocurrency gaming and transactions. You agree to hold Gamerge harmless for any losses incurred.</p>
        </div>
        <div className={styles.content}>
          <h2>Contact Us
          </h2>
          <p>For any questions or concerns regarding this Risk Disclosure, please contact our support team at
            <a href='mailto:support@gamerge.ai'> support@gamerge.ai</a>
          </p>
        </div>
      </div>
    </div>
  )
}
