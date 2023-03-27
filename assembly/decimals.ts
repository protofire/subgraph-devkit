import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { RAD, RAY, WAD } from "./constants/units";
import { TEN } from "./integers";

/**
 * BigDecimal Zero.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 *
 * decimals.ZERO; // => 0
 * ```
 * @returns the BigDecimal zero representation.
 */
export const ZERO = BigDecimal.fromString("0");

/**
 * BigDecimal One.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 *
 * decimals.ONE; // => 1
 * ```
 * @returns the BigDecimal one representation.
 */
export const ONE = BigDecimal.fromString("1");

/**
 * Creates BigDecimal number from BigInt.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigInt } from "@graphprotocol/graph-ts";
 *
 * const n = BigInt.fromI32(1000000);
 * decimals.fromBigInt(n, 6); // => 1
 * ```
 * @param value the BigInt number.
 * @param decimals the number of decimals.
 * @returns the BigDecimal representation of the BigInt.
 */
export function fromBigInt(value: BigInt, decimals: u8): BigDecimal {
  const precision = TEN.pow(decimals);

  return value.divDecimal(precision.toBigDecimal());
}

/**
 * Creates BigDecimal number from Float.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 *
 * decimals.fromFloat(1000000.123);
 * ```
 * @param value the Float number.
 * @returns the BigDecimal representation of the Float.
 */
export function fromFloat(value: f64): BigDecimal {
  return BigDecimal.fromString(value.toString());
}

/**
 * Creates BigDecimal number from Int.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 *
 * decimals.fromInt(9223372036854775807);
 * ```
 * @param value the Int number.
 * @returns the BigDecimal representation of the Int.
 */
export function fromInt(value: i64): BigDecimal {
  return BigDecimal.fromString(value.toString());
}

/**
 * Converts BigDecimal into BigInt.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigDecimal } from "@graphprotocol/graph-ts";
 *
 * const n = BigDecimal.fromString("1234.56");
 * decimals.toBigInt(n); // => 123456
 * ```
 * @param value the BigDecimal number.
 * @returns the BigInt representation of the BigDecimal.
 */
export function toBigInt(value: BigDecimal): BigInt {
  return value.digits;
}

/**
 * Get min value.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigDecimal } from "@graphprotocol/graph-ts";
 *
 * const a = BigDecimal.fromString("100.525678");
 * const b = BigDecimal.fromString("100.525679");
 * decimals.min(a, b); // => 100.525678
 * ```
 * @param a the BigDecimal number.
 * @param b the BigDecimal number.
 * @returns the min value.
 */
export function min(a: BigDecimal, b: BigDecimal): BigDecimal {
  return BigDecimal.compare(a, b) < 1 ? a : b;
}

/**
 * Get max value.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigDecimal } from "@graphprotocol/graph-ts";
 *
 * const a = BigDecimal.fromString("100.525678");
 * const b = BigDecimal.fromString("100.525679");
 * decimals.max(a, b); // => 100.525679
 * ```
 * @param a the BigDecimal number.
 * @param b the BigDecimal number.
 * @returns the max value.
 */
export function max(a: BigDecimal, b: BigDecimal): BigDecimal {
  return BigDecimal.compare(a, b) > 1 ? a : b;
}

/**
 * Creates BigDecimal number from RAD BigInt.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigInt } from "@graphprotocol/graph-ts";
 *
 * const rad = BigInt.fromString("12500000000000000000000000000000000000000000000");
 * decimals.fromRad(rad); // => 12.5;
 * ```
 * @param value the RAD BigInt number.
 * @returns the BigDecimal representation of the RAD BigInt.
 */
export function fromRad(value: BigInt): BigDecimal {
  return value.divDecimal(RAD.toBigDecimal());
}

/**
 * Creates BigDecimal number from RAY BigInt.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigInt } from "@graphprotocol/graph-ts";
 *
 * const ray = BigInt.fromString("12500000000000000000000000000");
 * decimals.fromRay(ray); // => 12.5
 * ```
 * @param value the RAY BigInt number.
 * @returns the BigDecimal representation of the RAY BigInt.
 */
export function fromRay(value: BigInt): BigDecimal {
  return value.divDecimal(RAY.toBigDecimal());
}

/**
 * Creates BigDecimal number from WAD BigInt.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigInt } from "@graphprotocol/graph-ts";
 *
 * const wad = BigInt.fromString("12500000000000000000");
 * decimals.fromWad(wad); // => 12.5
 * ```
 * @param value the WAD BigInt number.
 * @returns the BigDecimal representation of the WAD BigInt.
 */
export function fromWad(value: BigInt): BigDecimal {
  return value.divDecimal(WAD.toBigDecimal());
}

/**
 * Converts BigDecimal number into RAD BigInt.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigDecimal } from "@graphprotocol/graph-ts";
 *
 * const value = BigDecimal.fromString("12.5");
 * decimals.toRad(value); // => 12500000000000000000000000000000000000000000000
 * ```
 * @param value the BigDecimal number.
 * @returns the BigInt representation of the RAD BigDecimal.
 */
export function toRad(value: BigDecimal): BigInt {
  const n = value.times(RAD.toBigDecimal());

  return BigInt.fromString(n.toString());
}

/**
 * Converts BigDecimal number into RAY BigInt.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigDecimal } from "@graphprotocol/graph-ts";
 *
 * const value = BigDecimal.fromString("12.5");
 * decimals.toRay(value); // => 12500000000000000000000000000
 * ```
 * @param value the BigDecimal number.
 * @returns the BigInt representation of the RAY BigDecimal.
 */
export function toRay(value: BigDecimal): BigInt {
  const n = value.times(RAY.toBigDecimal());

  return BigInt.fromString(n.toString());
}

/**
 * Converts BigDecimal number into WAD BigInt.
 * @example
 * ```
 * import { decimals } from "@protofire/subgraph-devkit";
 * import { BigDecimal } from "@graphprotocol/graph-ts";
 *
 * const value = BigDecimal.fromString("12.5");
 * decimals.toWad(value); // => 12500000000000000000
 * ```
 * @param value the BigDecimal number.
 * @returns the BigInt representation of the WAD BigDecimal.
 */
export function toWad(value: BigDecimal): BigInt {
  const n = value.times(WAD.toBigDecimal());

  return BigInt.fromString(n.toString());
}
