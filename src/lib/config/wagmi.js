import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http, createStorage } from "wagmi";

import { bsc } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "Gamerge",
  projectId: "68575b07843435fd58ae89e9781ef00c",
  chains: [bsc],
  storage: createStorage({}),
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [bsc.id]: http(
      "https://bnb-mainnet.g.alchemy.com/v2/7N-r7Bov9ha2F5uxIKPBOmwI0W8z6u1X"
    ),
  },
});
