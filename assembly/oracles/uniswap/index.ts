import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { UniswapRouterContract } from "./UniswapRouterContract";
import { fetchDecimals } from "../../erc20";
import { addresses } from "../../constants";
import { decimals, integers, constants } from "../..";

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

export function fetchPriceUSD(tokenAddress: Address): BigDecimal {
  return fetchPrice(tokenAddress, addresses.USDC);
}
