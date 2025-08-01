'use client'
import AmbassadorProgram from '@/modules/ambassadorProgram'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <AmbassadorProgram />
    </div>
  )
}
