import { useReadAllPresales } from "./use-read-all-presales";

export const useParticipantDetail = () => {
  const { allPresalesQuery } = useReadAllPresales();
  const validPresales = allPresalesQuery.data.filter((presale) => {
    return presale.participants.totalGMG > BigInt(0);
  });
  const totalTgeClaimable = validPresales.reduce(
    (acc, presale) => acc + presale.participants.releaseOnTGE,
    BigInt(0),
  );
  const totalGMGBought = validPresales.reduce(
    (acc, presale) => acc + presale.participants.totalGMG,
    BigInt(0),
  );
  return {
    ...allPresalesQuery,
    data: {
      presales: validPresales,
      totalGMGBought: totalGMGBought,
      totalUsdSpent: validPresales.reduce(
        (acc, presale) => acc + presale.participants.totalBoughtInUsd,
        BigInt(0),
      ),
      totalTgeClaimable: totalTgeClaimable,
      totalVesting: totalGMGBought - totalTgeClaimable,
    },
  };
};
