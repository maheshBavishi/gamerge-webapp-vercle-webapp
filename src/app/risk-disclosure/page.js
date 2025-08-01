'use client'
import RiskDisclosure from '@/modules/riskDisclosure'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <RiskDisclosure />
    </div>
  )
}
