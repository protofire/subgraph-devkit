import { assert } from "matchstick-as";
import { BigDecimal } from "@graphprotocol/graph-ts";

export function decimalEquals(v1: BigDecimal, v2: BigDecimal): void {
  assert.stringEquals(v1.toString(), v2.toString());
}
