'use client'
import PrivacyPolicy from '@/modules/privacyPolicy'
import React, { useEffect } from 'react'

export default function page() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <PrivacyPolicy />
        </>
    )
}
