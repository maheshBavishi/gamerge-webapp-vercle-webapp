import { getTransactionReceipt, readContract, readContracts } from "wagmi/actions";
import { PRESALE_FACTORY_ABI } from "@/lib/abi/presale-factory";
import { wagmiConfig } from "@/lib/config/wagmi";
import { NULL_ADDRESS, PRESALE_FACTORY, USD_TOKEN_ADDRESS } from "@/lib/constants";
import { Alchemy, AssetTransfersCategory, Network } from "alchemy-sdk"
import { getLogs } from "viem/actions";
import { getClient } from "wagmi/actions";
import { PRESALE_ABI } from "@/lib/abi/presale";
import { parseEventLogs } from "viem";

export const fetchTransactions = async (
  presaleAddress,
  userAddress
) => {
  const alchemy = new Alchemy({
    apiKey: "iPoEl5vvoWCzSKQM7s3YsTXl-j0Sp223",
    network: Network.BNB_MAINNET
  });


  const allTransactions = await alchemy.core.getAssetTransfers({
    category: [AssetTransfersCategory.ERC20, AssetTransfersCategory.EXTERNAL],
    contractAddresses: [USD_TOKEN_ADDRESS],
    toAddress: presaleAddress,
    fromAddress: userAddress
  }).catch(console.error)


  if (allTransactions) {

    const mappedTx = await Promise.all(allTransactions.transfers.map(async (transfer) => {


      const txReceipt = await getTransactionReceipt(wagmiConfig, {
        hash: transfer.hash,
      }).catch(console.error)

      const txLogs = txReceipt.logs;
      console.log({ txLogs });
      const boughtWithLogs = parseEventLogs({
        abi: PRESALE_ABI,
        logs: txLogs,
        eventName: ["BoughtWithBnb", "BoughtWithUsdt"],

      })
      return {
        token: transfer.asset ?? "USDT",
        amount: transfer.rawContract.value,
        gmgBought: boughtWithLogs[0].args.gmgTokens,
        transactionHash: transfer.hash,
        buyer: transfer.from,
      }
    }));
    console.log({ mappedTx });
    return mappedTx;
  }
  return [];
};

export const readPresaleCalls = (
  contractAddress,
  userAddress
) =>
  [
    {
      address: contractAddress,
      abi: PRESALE_ABI,
      functionName: "presaleInfo",
    },
    {
      address: contractAddress,
      abi: PRESALE_ABI,
      functionName: "tgeTriggeredAt",
    },
    {
      address: contractAddress,
      abi: PRESALE_ABI,
      functionName: "isTgeTriggered",
    },
    {
      address: contractAddress,
      abi: PRESALE_ABI,
      functionName: "isPresaleStarted",
    },
    {
      address: contractAddress,
      abi: PRESALE_ABI,
      functionName: "gmgBought",
    },

    {
      abi: PRESALE_ABI,
      address: contractAddress,
      args: [userAddress ?? NULL_ADDRESS],
      functionName: "participantDetails",
    },
    {
      abi: PRESALE_FACTORY_ABI,
      address: PRESALE_FACTORY,
      functionName: "getTotalBought",
      args: [userAddress ?? NULL_ADDRESS],
    },
    {
      abi: PRESALE_ABI,
      address: contractAddress,
      functionName: "MAX_PURCHASE_LIMIT",
    },
    {
      abi: PRESALE_ABI,
      address: contractAddress ?? NULL_ADDRESS,
      functionName: "vestingWallet",
      args: [userAddress ?? NULL_ADDRESS],
    },
  ];

export async function fetchPresaleData(
  contractAddress,
  userAddress
) {
  // If no user address is provided, or if the contract address is empty,
  // you can decide whether to throw or return undefined.
  if (!contractAddress) throw new Error("No contract address provided");

  // Construct the "calls" array using your existing logic
  const calls = readPresaleCalls(contractAddress, userAddress ?? NULL_ADDRESS);

  // Invoke readContracts with your calls. Adjust `chainId` if needed
  // or remove it if you prefer to rely on your default wagmi client config.
  const data = await readContracts(wagmiConfig, {
    contracts: calls,
  });

  // Parse the data into your shape:
  let finalData;

  // Optionally log errors
  data.forEach((d) => {
    if (d.error) {
      console.error(d.error);
      throw d.error;
    }
  });

  // Data indices match your readPresaleCalls calls
  // Adjust indexing if your calls are structured differently
  const [
    presaleParams,
    tgeTriggeredAt,
    isTgeTriggered,
    isPresaleStarted,
    gmgBought,
    participantInfo,
    totalBoughtInUsd,
    maxPurchaseLimit,
    vestingWallet,
  ] = data;

  // Unpack presaleParams if it has a result
  if (presaleParams?.result) {
    const [
      pricePerToken,
      allocation,
      cliffPeriod,
      vestingMonths,
      tgePercentage,
      presaleStage,
    ] = presaleParams.result;

    finalData = {
      presaleInfo: {
        pricePerToken,
        allocation,
        cliffPeriod,
        vestingMonths,
        tgePercentage,
        presaleStage,
      },
      tgeTriggeredAt: tgeTriggeredAt?.result ?? BigInt(0),
      isTgeTriggered: isTgeTriggered?.result ?? false,
      isPresaleStarted: isPresaleStarted?.result ?? false,
      gmgBought: gmgBought?.result ?? BigInt(0),
      participants: {
        totalGMG: participantInfo?.result?.[0] ?? BigInt(0),
        releaseOnTGE: participantInfo?.result?.[1] ?? BigInt(0),
        isParticipant: participantInfo?.result?.[2] ?? false,
        totalBoughtInUsd: totalBoughtInUsd?.result ?? BigInt(0),
        vestingWallet: vestingWallet?.result ?? NULL_ADDRESS,
      },
      MAX_PURCHASE_LIMIT: maxPurchaseLimit?.result ?? 0,
    };
  }

  return finalData;
}

export const getAllPresaleAddresses = async () => {
  console.log("PRESALE_FACTORY", PRESALE_FACTORY);
  const allAddress = await readContract(wagmiConfig, {
    abi: PRESALE_FACTORY_ABI,
    functionName: "getAllPresales",
    address: PRESALE_FACTORY,
  });
  return allAddress;
};

export const getActivePresaleOnly = async () => {
  const presales = await getAllPresalesData();
  return presales.filter((presale) => presale.isPresaleStarted);
};

export const getAllPresalesData = async (userAddress) => {
  const allPresales = await getAllPresaleAddresses();

  const allFinalPresaleData = [];
  await Promise.all(
    allPresales.map(async (address) => {
      const presaleData = await readContracts(wagmiConfig, {
        contracts: readPresaleCalls(address, userAddress),
      });
      let finalData;
      if (presaleData[0]?.result) {
        const [
          pricePerToken,
          allocation,
          cliffPeriod,
          vestingMonths,
          tgePercentage,
          presaleStage,
        ] = presaleData[0].result;
        finalData = {
          ...finalData,
          presaleInfo: {
            pricePerToken,
            allocation,
            cliffPeriod,
            vestingMonths,
            tgePercentage,
            presaleStage,
          },
          address,
          tgeTriggeredAt: presaleData[1].result ?? BigInt(0),
          isTgeTriggered: presaleData[2].result ?? false,
          isPresaleStarted: presaleData[3].result ?? false,

          gmgBought: presaleData[4].result ?? BigInt(0),
          participants: {
            totalGMG: presaleData[5].result?.[0] ?? BigInt(0),
            releaseOnTGE: presaleData[5].result?.[1] ?? BigInt(0),
            isParticipant: presaleData[5].result?.[2] ?? false,
            totalBoughtInUsd: presaleData[6].result ?? BigInt(0),
            vestingWallet: presaleData[8].result ?? NULL_ADDRESS,
          },
          MAX_PURCHASE_LIMIT: presaleData[7].result ?? 0,
        };
        allFinalPresaleData.push(finalData);
      }
    })
  );

  return allFinalPresaleData.sort(
    (a, b) => a.presaleInfo.presaleStage - b.presaleInfo.presaleStage
  );
};

export const fetchTransactionsForPresale = async (
  presaleAddress
) => {

  const alchemy = new Alchemy({
    apiKey: "iPoEl5vvoWCzSKQM7s3YsTXl-j0Sp223",
    network: Network.BNB_MAINNET
  });


  const allTransactions = await alchemy.core.getAssetTransfers({
    category: [AssetTransfersCategory.ERC20, AssetTransfersCategory.EXTERNAL],
    contractAddresses: [USD_TOKEN_ADDRESS],
    toAddress: presaleAddress,
  }).catch(console.error)


  if (allTransactions) {

    const mappedTx = await Promise.all(allTransactions.transfers.map(async (transfer) => {
      // console.log({ client })

      const txReceipt = await getTransactionReceipt(wagmiConfig, {
        hash: transfer.hash,
      }).catch(console.error)

      const txLogs = txReceipt.logs;

      const boughtWithLogs = parseEventLogs({
        abi: PRESALE_ABI,
        logs: txLogs,
        eventName: ["BoughtWithBnb", "BoughtWithUsdt"],

      })
      return {
        token: transfer.asset ?? "USDT",
        amount: transfer.rawContract.value,
        gmgBought: boughtWithLogs[0].args.gmgTokens,
        transactionHash: transfer.hash,
        buyer: transfer.from,
      }
    }));

    return mappedTx.reverse();
  }
  return [];
};
