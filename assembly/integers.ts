import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function min(a: BigInt, b: BigInt): BigInt {
  return BigInt.compare(a, b) < 1 ? a : b;
}

export function max(a: BigInt, b: BigInt): BigInt {
  return BigInt.compare(a, b) > 1 ? a : b;
}

export function toBytes(value: BigInt, bigEndian: bool = true): Bytes {
  const littleEndian = Bytes.fromBigInt(value);
  return changetype<Bytes>(bigEndian ? littleEndian.reverse() : littleEndian);
}

export const TEN = BigInt.fromI32(10);
export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);
