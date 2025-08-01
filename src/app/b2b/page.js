'use client'
import B2b from '@/modules/b2b'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <B2b />
    </div>
  )
}
