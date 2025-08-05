/**
 * @typedef {Object} ParsedPresaleData
 * @property {bigint} gmgBought
 * @property {boolean} isPresaleStarted
 * @property {boolean} isTgeTriggered
 * @property {Object} presaleInfo
 * @property {bigint} presaleInfo.pricePerToken
 * @property {bigint} presaleInfo.allocation
 * @property {bigint} presaleInfo.cliffPeriod
 * @property {number} presaleInfo.vestingMonths
 * @property {number} presaleInfo.tgePercentage
 * @property {number} presaleInfo.presaleStage
 * @property {Object} participants
 * @property {bigint} participants.totalGMG
 * @property {bigint} participants.releaseOnTGE
 * @property {boolean} participants.isParticipant
 * @property {bigint} participants.totalBoughtInUsd
 * @property {`0x${string}`} participants.vestingWallet
 * @property {number} MAX_PURCHASE_LIMIT
 * @property {bigint} tgeTriggeredAt
 */

import { fetchPresaleData } from "@/lib/calls";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

export const useReadPresale = (contractAddress) => {
  const { address: userAddress } = useAccount();

  return /** @type {import("@tanstack/react-query").UseQueryResult<ParsedPresaleData>} */ (
    useQuery({
      queryKey: ["presale", contractAddress, userAddress],
      queryFn: () =>
        contractAddress
          ? fetchPresaleData(contractAddress, userAddress)
          : Promise.reject("No contract address"),
      enabled: Boolean(contractAddress),
    })
  );
};
