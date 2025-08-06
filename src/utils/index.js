


/**
 * @typedef {import("@/constants").TOKEN_DECIMALS} TOKEN_DECIMALS
 * @typedef {import("@/constants").USD_DECIMALS} USD_DECIMALS
 */

import { TOKEN_DECIMALS, USD_DECIMALS } from "@/lib/constants";
import { formatUnits } from "viem";

/**
 * Formats a number into a human-readable string with "K" or "M" suffix.
 *
 * @param {number} num - The number to format.
 * @returns {string} The formatted number as a string.
 */
export function formatNumber(num) {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  }
  return num.toString();
}

/**
 * Formats a USD value from a bigint to a string with 3 decimal places.
 *
 * @param {bigint} num - The USD value in bigint format.
 * @returns {string} The formatted USD value as a string.
 */
export function formatUSD(num) {
  return Number.parseFloat(formatUnits(num, USD_DECIMALS)).toFixed(3);
}

/**
 * Formats a token value from a bigint to a string with 3 decimal places.
 *
 * @param {bigint} num - The token value in bigint format.
 * @returns {string} The formatted token value as a string.
 */
export function formatToken(num) {
  return Number.parseFloat(formatUnits(num, TOKEN_DECIMALS)).toFixed(3);
}

/**
 * Shortens a hash string by keeping the first 6 and last 4 characters.
 *
 * @param {string} hash - The hash string to shorten.
 * @returns {string} The shortened hash string.
 */
export const shortenHash = (hash) => {
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
};
