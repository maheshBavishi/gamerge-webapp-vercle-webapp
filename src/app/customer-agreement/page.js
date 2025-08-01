'use client'
import CustomerAgreement from '@/modules/customerAgreement'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <CustomerAgreement />
    </div>
  )
}
