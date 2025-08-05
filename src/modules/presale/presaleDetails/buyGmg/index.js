import React, { useMemo, useState, useRef, useEffect } from 'react';
import styles from './buyGmg.module.scss';
import DownIconWhite from '@/components/icons/downIconWhite';
import Button from '@/components/button';
import { USD_TOKEN_ADDRESS, NULL_ADDRESS } from '@/lib/constants';
import { PRESALE_ABI } from '@/lib/abi/presale'
import { useSearchParams } from "next/navigation";
import { formatUSD, formatToken } from '@/utils';

import { usePriceFeedData } from '@/lib/hooks/use-price-feed-data';
import { useAccount, useReadContract, useClient } from 'wagmi';
import { writeContract } from "wagmi/actions"
import { toast } from 'sonner';
import { erc20Abi, isAddress, parseEther } from "viem"
import { wagmiConfig } from "@/lib/config/wagmi"
import CustomConnectButton from '@/components/connectButton';

const cryptoOptions = [
  { id: 'bnb', name: 'BNB', icon: '/assets/icons/bnb.svg', value: 'bnb-usd' },
  { id: 'usdt', name: 'USDT', icon: '/assets/icons/usdt.svg', value: 'usdt-usd' },
];

const pricePerToken = 0.01; // Example price per GMG in USD
/**
 * @typedef {import("@/lib/hooks/use-read-presale").ParsedPresaleData} ParsedPresaleData
 */

/**
 * @param {Object} props
 * @param {string} props.address - The contract address.
 * @param {ParsedPresaleData} props.presaleData - The presale data object.
 */
export default function BuyGmg({ address, presaleData }) {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [payAmount, setPayAmount] = useState('');
  const [estimatedGmg, setEstimatedGmg] = useState('');
  const dropdownRef = useRef(null);
  const [hasAllowance, setHasAllowance] = useState(false);
  const { address: userAddress, isConnected } = useAccount()
  const { data: allowance, refetch } = useReadContract({
    abi: erc20Abi,
    functionName: "allowance",
    address: USD_TOKEN_ADDRESS,
    args: [userAddress, address],
  });
  const searchParams = useSearchParams();

  const referral = searchParams.get("referral");
  const [isLoading, setIsLoading] = useState(false);
  const { data: tokenDecimals } = useReadContract({
    abi: erc20Abi,
    functionName: "decimals",
    address: USD_TOKEN_ADDRESS,
  });





  useEffect(() => {
    // Only check allowance if user is connected and wants to pay with USDT
    if (!isConnected || selectedCrypto.id !== "usdt") {
      setHasAllowance(false);
      return;
    }

    const amountFloat = Number.parseFloat(payAmount || "0");
    if (amountFloat <= 0) {
      setHasAllowance(false);
      return;
    }

    async function checkAllowance() {
      try {

        if (tokenDecimals && allowance) {
          const needed = BigInt(Math.floor(amountFloat * 10 ** tokenDecimals));
          setHasAllowance(allowance >= needed);
        }
        else {
          setHasAllowance(false)
        }
      } catch (err) {
        console.error("Error reading USDT allowance:", err);
        setHasAllowance(false);
      }
    }
    checkAllowance();
  }, [
    isConnected,
    selectedCrypto,
    payAmount,
    userAddress,
    address,
    tokenDecimals,
    allowance,
  ]);
  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get conversion rate for selected crypto to USD
  const { data: conversionRate } = usePriceFeedData("bnb-usd");

  useMemo(() => {
    if (!payAmount || !conversionRate) {
      setEstimatedGmg('');
      return;
    }
    if (selectedCrypto.id === 'bnb') {
      const amountInUsd = Number(payAmount) * Number(conversionRate);
      const gmg = amountInUsd / pricePerToken;
      setEstimatedGmg(gmg > 0 ? gmg.toFixed(3) : '');
    }
    if (selectedCrypto.id === "usdt") {
      const amountInUsd = Number(payAmount);
      const gmg = amountInUsd / pricePerToken;
      setEstimatedGmg(gmg > 0 ? gmg.toFixed(3) : '');
    }
  }, [payAmount, conversionRate, selectedCrypto]);

  let buttonText = "";
  switch (selectedCrypto.id) {
    case "usdt":
      buttonText = hasAllowance ? "Buy With USDT" : "Allow USDT";
      break;
    case "bnb":
    default:
      buttonText = "Buy With BNB";
      break;
  }
  const handleBuyUsdt = async () => {
    try {
      setIsLoading(true);


      const totalUsd = Number.parseFloat(payAmount ?? "0");

      if (
        BigInt(totalUsd) + presaleData.participants.totalBoughtInUsd >
        presaleData.MAX_PURCHASE_LIMIT
      ) {
        throw new Error("You are exceeding the purchase limit");
      }
      const usdtAmount = BigInt(Number(payAmount) * 10 ** (tokenDecimals ?? 6));
      const buyTx = await writeContract(wagmiConfig, {
        abi: PRESALE_ABI,
        functionName: "buyWithUsdt",
        address: address,
        args: [
          usdtAmount,
          referral && isAddress(referral) ? referral : NULL_ADDRESS,
        ],
      });
      console.log("buyTx", buyTx);
      await waitForTransactionReceipt(wagmiConfig, {
        hash: buyTx,
      });
      toast.success("Successfully bought GMG with USDT!");
    } catch (err) {
      console.error("Error buying with USDT:", err);
      toast.error("Failed to buy GMG with USDT");
    } finally {
      setIsLoading(false);
    }
  }
  const handleButtonClick = async () => {

    try {
      setIsLoading(true);
      switch (selectedCrypto.id) {
        case "usdt":
          if (!hasAllowance) {
            const amountFloat = Number.parseFloat(payAmount || "0");
            const amountBigInt = BigInt(
              Math.floor(amountFloat * 10 ** (tokenDecimals ?? 6))
            );
            const approveTx = await writeContract(wagmiConfig, {
              abi: erc20Abi,
              functionName: "approve",
              address: USD_TOKEN_ADDRESS,
              args: [address, amountBigInt],
            });
            await waitForTransactionReceipt(wagmiConfig, {
              hash: approveTx,
            });
            setHasAllowance(true);
            toast.success("USDT approved successfully!");
            await handleBuyUsdt()
          } else {
            await handleBuyUsdt()
          }
          break;
        case "bnb":
        default: {
          console.log("default")
          console.log({ address })
          console.log(parseEther(payAmount), "parse ether")
          console.log({ referral })
          const buyTx = await writeContract(wagmiConfig, {
            abi: PRESALE_ABI,
            functionName: "buyWithBnb",
            address: address,
            value: parseEther(payAmount),
            args: [referral && isAddress(referral) ? referral : NULL_ADDRESS],
          });

          await waitForTransactionReceipt(wagmiConfig, {
            hash: buyTx,
          });
          toast.success("Successfully bought GMG with BNB!");
        }
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong!");
    }
  }

  return (
    <div className={styles.buyGmgSection}>
      <h3>Buy GMG</h3>
      <div className={styles.subbox}>
        <div className={styles.inputDesign}>
          <label>You Pay</label>
          <div className={styles.relative}>
            <input
              type="number"
              placeholder="0"
              value={payAmount}
              onChange={e => setPayAmount(e.target.value)}
              min="0"
            />
            <div className={styles.rightContent} ref={dropdownRef}>
              <button
                type="button"
                className={styles.tokenSelectorBtn}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ position: 'relative', zIndex: 2 }}
              >
                <img src={selectedCrypto.icon} alt={selectedCrypto.name} style={{ width: 24, height: 24 }} />
                <span>{selectedCrypto.name}</span>
                <DownIconWhite />
              </button>
              <div
                className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  minWidth: '120px',
                  zIndex: 10,
                  background: 'rgba(30,30,30,0.98)',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s cubic-bezier(.4,0,.2,1), opacity 0.2s',
                  maxHeight: isDropdownOpen ? '200px' : '0',
                  opacity: isDropdownOpen ? 1 : 0,
                  pointerEvents: isDropdownOpen ? 'auto' : 'none',
                }}
              >
                {cryptoOptions.map(option => (
                  <button
                    key={option.id}
                    className={`${styles.dropdownItem} ${selectedCrypto.id === option.id ? styles.selected : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '10px 16px',
                      background: selectedCrypto.id === option.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                      color: 'var(--text-white)',
                      fontWeight: 700,
                      fontFamily: 'var(--plus-jakarta)',
                      fontSize: '15px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onClick={() => {
                      setSelectedCrypto(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <img src={option.icon} alt={option.name} style={{ width: 24, height: 24 }} />
                    <span>{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.conversionRate}>
            {conversionRate && selectedCrypto.id === "bnb" ? (
              <span>
                1 {selectedCrypto.name} ≈ {formatUSD(BigInt(Math.floor(conversionRate * 1e18)))} USD
              </span>
            ) : null}
          </div>
        </div>
        <div className={styles.inputDesign}>
          <label>You Get</label>
          <div className={styles.relative}>
            <input
              type="number"
              placeholder="0"
              value={estimatedGmg}
              readOnly
            />
            <div className={styles.rightContent}>
              <p>GMG</p>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <p>
            {payAmount || 0} {selectedCrypto.name} = {estimatedGmg || 0} GMG
          </p>
        </div>
      </div>
      <div className={styles.buttonAlignment}>
        {isConnected ? <Button
          text={buttonText}
          onClick={handleButtonClick}
        /> : <CustomConnectButton />}
      </div>
    </div>
  );
}
