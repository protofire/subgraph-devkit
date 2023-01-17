import { describe, test } from "matchstick-as/assembly/index";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { decimals, tests } from "../../../assembly";

describe("Decimals", () => {
  describe("ZERO", () => {
    test("returns number zero in BigInt", () => {
      tests.asserts.decimalEquals(decimals.ZERO, BigDecimal.fromString("0"));
    });
  });
  describe("ONE", () => {
    test("returns number one in BigInt", () => {
      tests.asserts.decimalEquals(decimals.ONE, BigDecimal.fromString("1"));
    });
  });
  describe("fromBigInt", () => {
    test("returns number ten in BigInt", () => {
      const value = BigInt.fromI32(1000000);

      tests.asserts.decimalEquals(
        decimals.fromBigInt(value, 6),
        BigDecimal.fromString("1")
      );
    });
  });
});
