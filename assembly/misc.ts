import { BigInt } from "@graphprotocol/graph-ts";
import * as decimals from "./decimals";

/**
 * Converts Float number into WAD BigInt.
 * @example
 * ```
 * import { misc } from "@protofire/subgraph-devkit";
 *
 * misc.floatToWAD(12.5); // => 12500000000000000000
 * ```
 * @param value the Float number.
 * @returns the BigInt representation in WAD.
 */
export function floatToWAD(value: f64): BigInt {
  return decimals.toWad(decimals.fromFloat(value));
}
