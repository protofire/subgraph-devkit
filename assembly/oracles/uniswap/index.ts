import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { UniswapRouterContract } from "./UniswapRouterContract";
import { fetchDecimals } from "../../erc20";
import { addresses } from "../../constants";
import { decimals, integers, constants } from "../..";

/**
 * Fetch the price of a token in the specified unit.
 * @param tokenAddress the token address.
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
 * const price = oracles.uniswap.fetchPrice(token, unit);
 * ```
 * @returns the price.
 */
export function fetchPrice(
  tokenAddress: Address,
  unitAddress: Address
): BigDecimal {
  const contract = UniswapRouterContract.bind(
    constants.addresses.UNISWAP_V2_ROUTER_02
  );

  let path: Address[] = [];

  if (tokenAddress == addresses.WETH) {
    path = [tokenAddress, unitAddress];
  } else {
    path = [tokenAddress, addresses.WETH, unitAddress];
  }

  const tokenDecimals = fetchDecimals(tokenAddress);

  const usdcDecimals = fetchDecimals(unitAddress);

  const amountIn = integers.TEN.pow(tokenDecimals as u8);

  const callResult = contract.try_getAmountsOut(amountIn, path);

  return decimals.fromBigInt(callResult.value.pop(), usdcDecimals);
}

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
 * const price = oracles.uniswap.fetchPriceUSD(token);
 * ```
 * @returns the price.
 */
export function fetchPriceUSD(tokenAddress: Address): BigDecimal {
  return fetchPrice(tokenAddress, addresses.USDC);
}
