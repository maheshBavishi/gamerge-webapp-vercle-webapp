import React from 'react'
import styles from './customerAgreement.module.scss';
import DownIcon from '@/components/icons/downIcon';
export default function CustomerAgreement() {
  return (
    <div className={styles.customerAgreement}>
      <div className='container-md'>
        <div className={styles.headingText}>
          <DownIcon />
          <h1>
           Customer Agreement
          </h1>
        </div>
        <div className={styles.content}>
          <p>
      This Customer Agreement sets forth the terms and conditions for using Gamerge, a crypto gaming platform that hosts various games, including Flappy Fox. By using Gamerge, you agree to comply with and be bound by the 
      following terms.
          </p>
        </div>
        <div className={styles.content}>
          <h2>1. Eligibility</h2>
          <p>Players must be at least 18 years old to participate in any games on Gamerge.</p>
          <p>By registering, you warrant that the information provided is accurate and up-to-date.</p>
          <p>Players must confirm that they are not residents of the United States (US).</p>
        </div>
        <div className={styles.content}>
          <h2>2. Account Responsibilities</h2>
          <p>Registration: Players are required to create an account with valid details, including email and wallet information. Gamerge may verify your identity before allowing withdrawals.</p>
          <p>
            Account Security: Users are responsible for maintaining the security of their login credentials. Gamerge will not be liable for unauthorized account access due to user negligence.
          </p>
        </div>
        <div className={styles.content}>
          <h2>sas</h2>
          <p>Registration: Players are required to create an account with valid details, including email and wallet information. Gamerge may verify your identity before allowing withdrawals.</p>
          <p>Account Security: Users are responsible for maintaining the security of their login credentials. Gamerge will not be liable for unauthorized account access due to user negligence.</p>
        </div>
        <div className={styles.content}>
          <h2>3. Game Modes and Rules</h2>
          <p>Gamerge offers multiple game modes:</p>
          <p>Demo Mode: Players can play for free without monetary stakes.</p>
          <p>1v1 Mode: Players can stake cryptocurrency in player vs player matches. The winner takes 90% of the pool, with 10% going to Gamerge as a platform fee.</p>
          <p>Tournament Mode: Players pay an entry fee to compete in scheduled tournaments. Entry fees are non-refundable.</p>
        </div>
        <div className={styles.content}>
          <h2>4. Cryptocurrency Transactions</h2>
          <p>Deposits and Withdrawals: Players can deposit and withdraw supported cryptocurrencies. Gamerge reserves the right to verify transactions for security reasons.</p>
          <p>Fees: All in-game cryptocurrency transactions may incur fees. Players are responsible for reviewing applicable transaction fees before proceeding.</p>
        </div>
        <div className={styles.content}>
          <h2>5. User Conduct</h2>
          <p>Fair Play: Cheating, exploiting bugs, or manipulating game mechanics is strictly prohibited. Gamerge reserves the right to ban players engaging in unfair practices.</p>
          <p>Community Behavior: Abusive language, harassment, or disruptive behavior will not be tolerated. Gamerge may suspend or terminate accounts for inappropriate conduct.</p>
        </div>
        <div className={styles.content}>
          <h2>6. Referral Program</h2>
          <p>Gamerge offers a referral program that rewards players for inviting others. These rewards are distributed as in-game items or currency, which cannot be withdrawn but can be used within the platform.</p>
        </div>
        <div className={styles.content}>
          <h2>7. Platform Rights</h2>
          <p>Modifications: Gamerge reserves the right to modify game rules, features, or any aspect of the platform at any time.</p>
          <p>
            Account Termination: Gamerge may suspend or terminate user accounts at its discretion for violating any part of this agreement.
          </p>
        </div>
        <div className={styles.content}>
          <h2>8. Limitation of Liability</h2>
          <p>Gamerge is not responsible for losses resulting from gameplay, including the loss of staked cryptocurrency. Players participate at their own risk.</p>
        </div>
        <div className={styles.content}>
          <h2>9. Amendments</h2>
          <p>This agreement may be updated periodically. Users will be notified of significant changes. Continued use of Gamerge constitutes acceptance of the revised terms.</p>
        </div>
        <div className={styles.content}>
          <h2>Contact Us</h2>
          <p>For further information or inquiries, contact our support team at <a href='mailto:support@gamerge.ai'> support@gamerge.ai</a></p>
        </div>
      </div>
    </div>
  )
}
