'use client'
import Staking from '@/modules/staking'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
  return (
    <div>
      <Staking shadowShow/>
    </div>
  )
}
