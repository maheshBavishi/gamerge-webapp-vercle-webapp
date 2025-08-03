import { fetchPresaleData } from "@/lib/calls";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

export const useReadPresale = (contractAddress) => {
  const { address: userAddress } = useAccount();

  return useQuery({
    queryKey: ["presale", contractAddress, userAddress],
    queryFn: () =>
      contractAddress
        ? fetchPresaleData(contractAddress, userAddress)
        : Promise.reject("No contract address"),
    enabled: Boolean(contractAddress),
  });
};
