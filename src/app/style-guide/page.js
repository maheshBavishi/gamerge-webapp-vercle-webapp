'use client'
import StyleGuide from '@/modules/styleGuide'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <StyleGuide />
    </div>
  )
}
