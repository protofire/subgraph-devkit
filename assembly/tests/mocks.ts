import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { createMockedFunction } from "matchstick-as";
import { constants } from "..";

export function mockChainLink(
  baseAddress: Address,
  quoteAddress: Address,
  value: BigInt,
  decimals: u8
): void {
  createMockedFunction(
    constants.addresses.CHAINLINK_FEED_REGISTRY,
    "latestRoundData",
    "latestRoundData(address,address):(uint80,int256,uint256,uint256,uint80)"
  )
    .withArgs([
      ethereum.Value.fromAddress(baseAddress),
      ethereum.Value.fromAddress(quoteAddress)
    ])
    .returns([
      ethereum.Value.fromI32(0),
      ethereum.Value.fromUnsignedBigInt(value),
      ethereum.Value.fromI32(0),
      ethereum.Value.fromI32(0),
      ethereum.Value.fromI32(0)
    ]);

  createMockedFunction(
    constants.addresses.CHAINLINK_FEED_REGISTRY,
    "decimals",
    "decimals(address,address):(uint8)"
  )
    .withArgs([
      ethereum.Value.fromAddress(baseAddress),
      ethereum.Value.fromAddress(quoteAddress)
    ])
    .returns([ethereum.Value.fromI32(decimals)]);
}

export function mockYearnLens(quoteAddress: Address, value: BigInt): void {
  createMockedFunction(
    constants.addresses.YEARN_LENS_ORACLE,
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
    constants.addresses.UNISWAP_V2_ROUTER_02,
    "getAmountsOut",
    "getAmountsOut(uint256,address[]):(uint256[])"
  )
    .withArgs([
      ethereum.Value.fromUnsignedBigInt(amountIn),
      ethereum.Value.fromAddressArray(path)
    ])
    .returns([ethereum.Value.fromUnsignedBigIntArray([amountIn, amountOut])]);
}

export function mock_ERC20_decimals(address: Address, decimals: u8): void {
  createMockedFunction(address, "decimals", "decimals():(uint8)").returns([
    ethereum.Value.fromI32(decimals)
  ]);
}
