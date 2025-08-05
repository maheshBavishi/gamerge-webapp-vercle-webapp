import {
  getActivePresaleOnly,
  getAllPresaleAddresses,
  getAllPresalesData,
} from "@/lib/calls";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";
export const useReadAllPresales = () => {
  const { address } = useAccount();
  const allPresaleActiveAddressesQuery = useSuspenseQuery({
    queryKey: ["allPresaleActiveAddresses", address],
    queryFn: getAllPresaleAddresses,

    refetchOnWindowFocus: true,
  });
  const activePresalesQuery = useSuspenseQuery({
    queryKey: ["activePresales", address],
    queryFn: getActivePresaleOnly,
    refetchOnWindowFocus: true,
  });
  const allPresalesQuery = useSuspenseQuery({
    queryKey: ["allPresales", address],
    queryFn: () => getAllPresalesData(address),
    refetchOnWindowFocus: true,
  });

  return {
    allPresaleActiveAddressesQuery,
    activePresalesQuery,
    allPresalesQuery,
  };
};
