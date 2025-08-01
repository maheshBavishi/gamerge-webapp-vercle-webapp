'use client'
import BlogDetails from '@/modules/blogDetails'
import React, { useEffect } from 'react'

export default function index() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <BlogDetails />
    </div>
  )
}
