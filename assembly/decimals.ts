import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { RAD, RAY, WAD } from "./constants/units";
import { TEN } from "./integers";

export const ZERO = BigDecimal.fromString("0");
export const ONE = BigDecimal.fromString("1");

export function fromBigInt(value: BigInt, decimals: u8): BigDecimal {
  const precision = TEN.pow(decimals);

  return value.divDecimal(precision.toBigDecimal());
}

export function fromFloat(value: f64): BigDecimal {
  return BigDecimal.fromString(value.toString());
}

export function fromInt(value: i64): BigDecimal {
  return BigDecimal.fromString(value.toString());
}

export function toBigInt(value: BigDecimal): BigInt {
  return value.digits;
}

export function min(a: BigDecimal, b: BigDecimal): BigDecimal {
  return BigDecimal.compare(a, b) < 1 ? a : b;
}

export function max(a: BigDecimal, b: BigDecimal): BigDecimal {
  return BigDecimal.compare(a, b) > 1 ? a : b;
}

// MakerDAO
export function fromRad(value: BigInt): BigDecimal {
  return value.divDecimal(RAD.toBigDecimal());
}

export function fromRay(value: BigInt): BigDecimal {
  return value.divDecimal(RAY.toBigDecimal());
}

export function fromWad(value: BigInt): BigDecimal {
  return value.divDecimal(WAD.toBigDecimal());
}
