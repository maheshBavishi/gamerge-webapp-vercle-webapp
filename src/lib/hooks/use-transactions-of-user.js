import { fetchTransactions } from "@/lib/calls";
import { NULL_ADDRESS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

export const useTransactionsOfUser = (presaleAddress) => {
  const { address } = useAccount();
  return useQuery({
    queryKey: ["transactions", presaleAddress, address],
    queryFn: async () => {
      return await fetchTransactions(
        presaleAddress,
        address ?? NULL_ADDRESS
      );
    },
    enabled: Boolean(presaleAddress),
  });
};
