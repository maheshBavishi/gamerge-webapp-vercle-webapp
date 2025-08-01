import React from 'react'
import styles from './styleGuideBanner.module.scss';
import BrandColors from '../brandColors';
export default function StyleGuideBanner() {
  return (
    <div className={styles.stleguidebanner}>
      <div className='container-md'>
        <h1>
          Gamerge <br />
          Brand guidlines
        </h1>
        <p>
          This page outlines the correct and consistent use of our logo, colors, typography, and visual elements. Whether you're a partner, collaborator, or media outlet, these standards ensure that our brand is represented clearly and cohesively across all channels. Please follow these guidelines to maintain the integrity of 
          our identity.
        </p>
      </div>
    </div>
  )
}
