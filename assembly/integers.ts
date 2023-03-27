import { BigInt, Bytes } from "@graphprotocol/graph-ts";

/**
 * BigInt Ten.
 * @example
 * ```
 * import { integers } from "@protofire/subgraph-devkit";
 *
 * integers.TEN; // => 10
 * ```
 * @returns the BigInt ten representation.
 */
export const TEN = BigInt.fromI32(10);

/**
 * BigInt Zero.
 * @example
 * ```
 * import { integers } from "@protofire/subgraph-devkit";
 *
 * integers.ZERO; // => 0
 * ```
 * @returns the BigInt zero representation.
 */
export const ZERO = BigInt.fromI32(0);

/**
 * BigInt One.
 * @example
 * ```
 * import { integers } from "@protofire/subgraph-devkit";
 *
 * integers.ONE; // => 1
 * ```
 * @returns the BigInt one representation.
 */
export const ONE = BigInt.fromI32(1);

/**
 * Get min value.
 * @example
 * ```
 * import { integers } from "@protofire/subgraph-devkit";
 * import { BigInt } from "@graphprotocol/graph-ts";
 *
 * const a = BigInt.fromI32(100);
 * const b = BigInt.fromI32(101);
 * integers.min(a, b); // => 100
 * ```
 * @param a the BigInt number.
 * @param b the BigInt number.
 * @returns the min value.
 */
export function min(a: BigInt, b: BigInt): BigInt {
  return BigInt.compare(a, b) < 1 ? a : b;
}

/**
 * Get max value.
 * @example
 * ```
 * import { integers } from "@protofire/subgraph-devkit";
 * import { BigInt } from "@graphprotocol/graph-ts";
 *
 * const a = BigInt.fromI32(100);
 * const b = BigInt.fromI32(101);
 * integers.max(a, b); // => 101
 * ```
 * @param a the BigInt number.
 * @param b the BigInt number.
 * @returns the max value.
 */
export function max(a: BigInt, b: BigInt): BigInt {
  return BigInt.compare(a, b) > 1 ? a : b;
}

/**
 * Converts BigInt into Bytes.
 * @example
 * ```
 * import { integers } from "@protofire/subgraph-devkit";
 * import { BigInt } from "@graphprotocol/graph-ts";
 *
 * const n = BigInt.fromI32(100);
 * integers.toBytes(n);
 * ```
 * @param value the BigInt number.
 * @param bigEndian whether the bytes are big endian or not.
 * @returns the Bytes representation of the BigInt.
 */
export function toBytes(value: BigInt, bigEndian: bool = true): Bytes {
  const littleEndian = Bytes.fromBigInt(value);
  return changetype<Bytes>(bigEndian ? littleEndian.reverse() : littleEndian);
}
