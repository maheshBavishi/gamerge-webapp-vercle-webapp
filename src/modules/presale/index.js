"use client"
import React, { Suspense } from "react";
import PresaleBanner from "./presaleBanner";
import PresaleDetails from "./presaleDetails";
import EarnUsdt from "./earnUsdt";
import DownloadApp from "@/components/downloadApp";
import Faq from "../home/faq";
import PresalePhases from "./presalePhases";
import { useReadPresale } from "@/lib/hooks/use-read-presale";
import { useReadAllPresales } from "@/lib/hooks/use-read-all-presales";
import styles from "./presale.module.scss";
export default function PresalePage() {
  const { allPresaleActiveAddressesQuery } = useReadAllPresales();
  const activeAddresses = allPresaleActiveAddressesQuery.data;
  if (activeAddresses.length === 0 || !activeAddresses || !activeAddresses[0]) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card>There are no active presales</Card>
      </div>
    );
  }
  console.log({ activeAddresses })
  const address = "0x5765f859321817e1cF58508EC482016eb8C78F9A"

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <PresaleBanner />
        <PresaleDetails address={address} />
        <EarnUsdt />
        <PresalePhases />
        <Faq />
        <div className={styles.downloadAppTopAlignment}>
          <DownloadApp />
        </div>
      </div>
    </Suspense>
  );
}
