import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { constants, decimals } from "../..";
import { Contract } from "./Contract";

/**
 * Fetch the price of a token in USD.
 * @param tokenAddress the token address.
 * @returns the price in USD.
 * @example
 * ```
 * import { Address } from "@graphprotocol/graph-ts";
 * import { oracles } from "@protofire/subgraph-devkit";
 *
 * const token = Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f");
 * const price = oracles.yearnLens.fetchPriceUSD(token);
 * ```
 * @returns the price.
 */
export function fetchPriceUSD(tokenAddress: Address): BigDecimal {
  const contract = Contract.bind(constants.addresses.YEARN_LENS_ORACLE);

  const getPriceUsdcRecommendedCall =
    contract.try_getPriceUsdcRecommended(tokenAddress);

  return decimals.fromBigInt(getPriceUsdcRecommendedCall.value, 6);
}
