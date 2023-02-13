import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { createMockedFunction } from "matchstick-as";
import { chainlink, yearnLens, uniswap } from "../oracles";

export function mockChainLink(
  baseAddress: Address,
  quoteAddress: Address,
  value: BigInt,
  decimals: u8
): void {
  createMockedFunction(
    chainlink.CONTRACT_ADDRESS,
    "latestRoundData",
    "latestRoundData(address,address):(uint80,int256,uint256,uint256,uint80)"
  )
    .withArgs([
      ethereum.Value.fromAddress(baseAddress),
      ethereum.Value.fromAddress(quoteAddress),
    ])
    .returns([
      ethereum.Value.fromI32(0),
      ethereum.Value.fromUnsignedBigInt(value),
      ethereum.Value.fromI32(0),
      ethereum.Value.fromI32(0),
      ethereum.Value.fromI32(0),
    ]);

  createMockedFunction(
    chainlink.CONTRACT_ADDRESS,
    "decimals",
    "decimals(address,address):(uint8)"
  )
    .withArgs([
      ethereum.Value.fromAddress(baseAddress),
      ethereum.Value.fromAddress(quoteAddress),
    ])
    .returns([ethereum.Value.fromI32(decimals)]);
}

export function mockYearnLens(quoteAddress: Address, value: BigInt): void {
  createMockedFunction(
    yearnLens.CONTRACT_ADDRESS,
    "getPriceUsdcRecommended",
    "getPriceUsdcRecommended(address):(uint256)"
  )
    .withArgs([ethereum.Value.fromAddress(quoteAddress)])
    .returns([ethereum.Value.fromUnsignedBigInt(value)]);
}

export function mock_Uniswap_getAmountsOut(
  amountIn: BigInt,
  path: Address[],
  amountOut: BigInt
): void {
  createMockedFunction(
    uniswap.UNISWAP_ROUTER_CONTRACT_ADDRESS,
    "getAmountsOut",
    "getAmountsOut(uint256,address[]):(uint256[])"
  )
    .withArgs([
      ethereum.Value.fromUnsignedBigInt(amountIn),
      ethereum.Value.fromAddressArray(path),
    ])
    .returns([ethereum.Value.fromUnsignedBigIntArray([amountIn, amountOut])]);
}

export function mock_ERC20_decimals(address: Address, decimals: u8): void {
  createMockedFunction(address, "decimals", "decimals():(uint8)").returns([
    ethereum.Value.fromI32(decimals),
  ]);
}
