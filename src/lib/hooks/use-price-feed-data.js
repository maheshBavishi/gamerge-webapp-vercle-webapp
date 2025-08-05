import { PRICE_FEED_ABI } from "@/lib/abi/price-feed";
import { PRICE_FEED_CONTRACTS } from "@/lib/constants";
import { formatUnits } from "viem";
import { useReadContracts } from "wagmi";

const priceFeedContracts = PRICE_FEED_CONTRACTS;

export const usePriceFeedData = (type) => {
  const query = useReadContracts({
    contracts: [
      {
        abi: PRICE_FEED_ABI,
        address: priceFeedContracts[type],
        functionName: "decimals",
      },
      {
        abi: PRICE_FEED_ABI,
        address: priceFeedContracts[type],
        functionName: "latestAnswer",
      },
    ],
  });

  let finalData;

  if (query.data) {
    finalData = Number.parseFloat(
      formatUnits(query.data[1].result ?? BigInt(0), query.data[0].result ?? 0),
    );
  }

  return {
    ...query,
    data: finalData,
  };
};
