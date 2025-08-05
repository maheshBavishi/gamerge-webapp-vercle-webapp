'use client'
import PresalePage from '@/modules/presale/index'
import React, { useEffect, Suspense } from 'react'
import { useReadAllPresales } from "@/lib/hooks/use-read-all-presales";

export default function page() {

  const { allPresaleActiveAddressesQuery } = useReadAllPresales();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const activeAddresses = allPresaleActiveAddressesQuery.data;
  if (activeAddresses.length === 0 || !activeAddresses || !activeAddresses[0]) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card>There are no active presales</Card>
      </div>
    );
  }


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PresalePage address={activeAddresses[0]} />
    </Suspense>
  )
}
