import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { TEN } from "./integers";

export function fromBigInt(value: BigInt, decimals: u8): BigDecimal {
  const precision = TEN.pow(decimals).toBigDecimal();

  return value.divDecimal(precision);
}

export const ZERO = BigDecimal.fromString("0");
export const ONE = BigDecimal.fromString("1");
