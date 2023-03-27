import { BigInt } from "@graphprotocol/graph-ts";
import { integers } from "..";

/**
 * USDC - 6 decimals
 * @example
 * ```
 * import { units } from "@protofire/subgraph-devkit";
 *
 * units.USDC; // => 1000000
 * ```
 * @returns the USDC unit.
 */
export const USDC = integers.TEN.pow(6);

/**
 * WAD - 18 decimals
 * @example
 * ```
 * import { units } from "@protofire/subgraph-devkit";
 *
 * units.WAD; // => 1000000000000000000
 * ```
 * @returns the WAD unit.
 */
export const WAD = BigInt.fromString("1000000000000000000");

/**
 * RAY - 27 decimals
 * @example
 * ```
 * import { units } from "@protofire/subgraph-devkit";
 *
 * units.RAY; // => 1000000000000000000000000000
 * ```
 * @returns the RAY unit.
 */
export const RAY = BigInt.fromString("1000000000000000000000000000");

/**
 * RAD - 45 decimals
 * @example
 * ```
 * import { units } from "@protofire/subgraph-devkit";
 *
 * units.RAD; // => 1000000
 * ```
 * @returns the RAD unit.
 */
export const RAD = BigInt.fromString(
  "1000000000000000000000000000000000000000000000"
);
