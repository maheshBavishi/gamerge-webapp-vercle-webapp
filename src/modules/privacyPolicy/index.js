import React from 'react'
import styles from './privacyPolicy.module.scss';
import DownIcon from '@/components/icons/downIcon';
export default function PrivacyPolicy() {
  return (
    <div className={styles.privacyPolicyContent}>
      <div className='container-md'>
        <div className={styles.headingText}>
          <DownIcon />
          <h1>
            Privacy Policy
          </h1>
        </div>
        <div className={styles.content}>
          <p>
            This Privacy Policy outlines how Gamerge collects, uses, and protects personal information provided by users. By using Gamerge, you agree to the collection and use of information as
            described below.
          </p>
        </div>
        <div className={styles.content}>
          <h2>1. Information Collection</h2>
          <p>
            Gamerge collects personal information during registration, gameplay, and interactions with our platform.
            This includes:
          </p>
          <p>Personal Information: Name, email address, wallet information.</p>
          <p>Game Activity: Gameplay history, tournament participation, in-game purchases.</p>
          <p>Technical Data: Device information, IP address, and usage patterns.</p>
        </div>
        <div className={styles.content}>
          <h2>2. Information Usage</h2>
          <p>The information collected is used for the following purposes:</p>
          <p>Account Management: To manage user accounts, verify identity, and facilitate gameplay.</p>
          <p>Payment Processing: To enable deposits, withdrawals, and in-game transactions.</p>
          <p>Improvement of Services: To personalize user experience, enhance game features, and communicate updates.</p>
        </div>
        <div className={styles.content}>
          <h2>
            3. Sharing of Information
          </h2>
          <p>Gamerge does not sell or rent personal information to third parties. Information may be shared with:
          </p>
          <p>Service Providers: To facilitate operations such as payment processing and customer support.
          </p>
          <p>Legal Requirements: If required by law or to protect the rights and safety of Gamerge and its users.
          </p>
        </div>
        <div className={styles.content}>
          <h2>
            4. Data Security
          </h2>
          <p>
            We take appropriate measures to protect user data against unauthorized access, alteration, or destruction. Wallet information and transaction details are encrypted and 
            securely stored.
          </p>
        </div>
        <div className={styles.content}>
          <h2>
            5. Cookies
          </h2>
          <p>
            Gamerge uses cookies to enhance user experience, track user activity, and gather analytics. Players may disable cookies, but certain features may 
            become unavailable.
          </p>
        </div>
        <div className={styles.content}>
          <h2>
            6. User Rights
          </h2>
          <p>
            Users have the right to access, update, or delete their personal information by contacting our support team. Users may also withdraw consent for data processing 
            where applicable.
          </p>
        </div>
        <div className={styles.content}>
          <h2>
            7. Changes to Privacy Policy
          </h2>
          <p>
            Gamerge may update this Privacy Policy periodically. Users will be notified of any significant changes through our 
            platform.
          </p>
        </div>
        <div className={styles.content}>
          <h2>
            Contact Us
          </h2>
          <p>
            For questions regarding our Privacy Policy, please contact our support team at 
            <a href='mailto:support@gamerge.ai' aria-label='support@gamerge.ai'> support@gamerge.ai</a>
          </p>
        </div>
        <div className={styles.content}></div>
      </div>
    </div>
  )
}
