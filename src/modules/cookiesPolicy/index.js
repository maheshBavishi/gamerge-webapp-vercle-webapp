import React from 'react'
import styles from './cookiesPolicy.module.scss';
import DownIcon from '@/components/icons/downIcon';
export default function CookiesPolicy() {
  return (
    <div className={styles.cookiesPolicy}>
      <div className='container-md'>
        <div className={styles.headingText}>
          <DownIcon />
          <h1>
           Cookies Policy
          </h1>
        </div>
        <div className={styles.content}>
          <p>
           This Cookies Policy outlines how Gamerge uses cookies and similar technologies to enhance user experience on the platform. By using Gamerge, you agree to the use of cookies as 
           described below.
          </p>
        </div>
        <div className={styles.content}>
          <h2>1. What Are Cookies?</h2>
          <p>
         Cookies are small text files stored on your device by your web browser. They help Gamerge recognize users, track their actions, and provide a more personalized gaming experience. Cookies can 
         be session-based (temporary) or persistent (stored for a longer time).
          </p>
        </div>
         <div className={styles.content}>
          <h2>
            2. How Gamerge Uses Cookies
          </h2>
          <p>Authentication: Cookies are used to keep users logged in and ensure secure access to their accounts.</p>
          <p>Preferences: Cookies store user preferences, such as selected game themes or interface settings, to enhance the gaming experience.</p>
          <p>Analytics: Gamerge uses cookies to gather usage data to understand how users interact with the platform. This helps us improve our services and gameplay features.</p>
          <p>Marketing: Cookies may be used to display relevant promotions, in-game offers, or referral program incentives.</p>
         </div>
         <div className={styles.content}>
          <h2>
            3. Types of Cookies We Use
          </h2>
          <p>Essential Cookies: Necessary for the functioning of the platform, including authentication and security.</p>
          <p>Functional Cookies: These allow us to remember your preferences and provide enhanced features.</p>
          <p>Analytical Cookies: Used to collect information about how users interact with Gamerge to improve performance and functionality.
</p>
         </div>
         <div className={styles.content}>
          <h2>
            4. Managing Cookies
          </h2>
          <p>
            Users can manage or disable cookies through their browser settings. However, disabling cookies may limit certain functionalities, such as gameplay features or personalized settings. Please note that essential cookies cannot be disabled as they are required for basic operations of 
            the platform.
          </p>
         </div>
         <div className={styles.content}>
          <h2>
            5. Third-Party Cookies
          </h2>
          <p>
            Gamerge may use third-party cookies for analytics and marketing purposes. These cookies are subject to the privacy policies of the third-
            party providers.
          </p>
         </div>
         <div className={styles.content}>
          <h2>
            6. Changes to This Policy
          </h2>
          <p>
            Gamerge may update this Cookies Policy from time to time to reflect changes in technology or legal requirements. Users will be notified of significant updates through 
            the platform.
          </p>
         </div>
         <div className={styles.content}>
          <h2>
            Contact Us
          </h2>
          <p>
            For more information regarding our use of cookies, please contact us at <a href='mailto:support@gamerge.ai' aria-label='support@gamerge.ai'>support@gamerge.ai</a>
          </p>
         </div>
      </div>
    </div>
  )
}


