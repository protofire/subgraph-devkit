import { assert, describe, test } from "matchstick-as/assembly/index";
import { BigInt } from "@graphprotocol/graph-ts";
import { misc } from "../../../assembly";

describe("Misc", () => {
  describe("floatToWAD", () => {
    test("converts Float into BigInt in WAD", () => {
      const result = misc.floatToWAD(12.5);
      const bigIntWad = BigInt.fromString("12500000000000000000");

      assert.bigIntEquals(bigIntWad, result);
    });
  });
});
