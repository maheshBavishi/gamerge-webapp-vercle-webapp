'use client'
import CookiesPolicy from '@/modules/cookiesPolicy'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <CookiesPolicy />
    </>
  )
}
