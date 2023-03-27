import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { decimals, constants } from "../..";
import { Contract } from "./Contract";

export const USD_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000348"
);

/**
 * Fetch the price of a token in the specified unit.
 * @param token the token address.
 * @param unitAddress the unit address.
 * @returns the price in units of the token.
 * @example
 * ```
 * import { Address } from "@graphprotocol/graph-ts";
 * import { oracles } from "@protofire/subgraph-devkit";
 *
 * const token = Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f");
 * const unit = Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48");
 *
 * const price = oracles.chainlink.fetchPrice(token, unit);
 * ```
 * @returns the price.
 */
export function fetchPrice(token: Address, unitAddress: Address): BigDecimal {
  const contract = Contract.bind(constants.addresses.CHAINLINK_FEED_REGISTRY);

  const latestRoundDataCall = contract.try_latestRoundData(token, unitAddress);

  const pairDecimalsCall = contract.try_decimals(token, unitAddress);

  const price = latestRoundDataCall.value.value1;
  const pairDecimals = pairDecimalsCall.value;

  return decimals.fromBigInt(price, pairDecimals as u8);
}

/**
 * Fetch the price of a token in USD.
 * @param token the token address.
 * @returns the price in USD.
 * @example
 * ```
 * import { Address } from "@graphprotocol/graph-ts";
 * import { oracles } from "@protofire/subgraph-devkit";
 *
 * const token = Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f");
 * const price = oracles.chainlink.fetchPriceUSD(token);
 * ```
 * @returns the price.
 */
export function fetchPriceUSD(token: Address): BigDecimal {
  return fetchPrice(token, USD_ADDRESS);
}
