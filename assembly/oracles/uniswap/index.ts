import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { UniswapRouterContract } from "./UniswapRouterContract";
import { fetchDecimals } from "../../erc20";
import { addresses } from "../../constants";
import { decimals, integers } from "../..";

export const UNISWAP_ROUTER_CONTRACT_ADDRESS = Address.fromString(
  "0x7a250d5630b4cf539739df2c5dacb4c659f2488d"
);

export function fetchPrice(tokenAddress: Address): BigDecimal {
  const contract = UniswapRouterContract.bind(UNISWAP_ROUTER_CONTRACT_ADDRESS);

  let path: Address[] = [];

  if (tokenAddress == addresses.WETH) {
    path = [tokenAddress, addresses.USDC];
  } else {
    path = [tokenAddress, addresses.WETH, addresses.USDC];
  }

  const tokenDecimals = fetchDecimals(tokenAddress);

  const usdcDecimals = fetchDecimals(addresses.USDC);

  const amountIn = integers.TEN.pow(tokenDecimals as u8);

  const callResult = contract.try_getAmountsOut(amountIn, path);

  return decimals.fromBigInt(callResult.value.pop(), usdcDecimals);
}
