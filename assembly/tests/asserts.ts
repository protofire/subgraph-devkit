import { assert } from "matchstick-as";
import { BigDecimal } from "@graphprotocol/graph-ts";

/**
 * Assert two BigDecimals are equal.
 * @example
 * ```
 * import { BigDecimal } from "@graphprotocol/graph-ts";
 * import { describe, test } from "matchstick-as/assembly/index";
 * import { tests } from "@protofire/subgraph-devkit";
 *
 * describe("decimalEquals", () => {
 *   test("decimal equals to decimal", () => {
 *     const a = BigDeciaml.fromString("100");
 *     const b = BigDeciaml.fromString("100");
 *
 *     tests.asserts.decimalEquals(a, b);
 *   });
 * );
 * ```
 * @param v1 the BigDecimal number.
 * @param v2 the BigDecimal number.
 */
export function decimalEquals(v1: BigDecimal, v2: BigDecimal): void {
  assert.stringEquals(v1.toString(), v2.toString());
}
