"use client";

import { wagmiConfig } from "@/lib/config/wagmi";
import { useMounted } from "@/lib/hooks/use-mounted-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import ApolloClientProvider from "@/components/ApolloClientProvider";
const queryClient = new QueryClient();


import dynamic from "next/dynamic";

export default function Providers({
  initialState,
  children,
}) {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <ApolloClientProvider>
      <WagmiProvider initialState={initialState} config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ApolloClientProvider>
  );
}
