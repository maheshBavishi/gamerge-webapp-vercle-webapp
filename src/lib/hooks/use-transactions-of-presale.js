import { fetchTransactionsForPresale } from "@/lib/calls";
import { useQuery } from "@tanstack/react-query";

export const useTransactionsOfPresale = (presaleAddress) => {
  return useQuery({
    queryKey: ["transactions", presaleAddress],
    queryFn: async () => {
      return await fetchTransactionsForPresale(presaleAddress);
    },
    enabled: Boolean(presaleAddress),
  });
};
