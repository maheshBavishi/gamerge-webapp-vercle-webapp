'use client'
import PresalePage from '@/modules/presale'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <PresalePage />
    </div>
  )
} 
