import { describe, test, assert } from "matchstick-as/assembly/index";
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
  describe("fromFloat", () => {
    test("returns BigDecimal from Float", () => {
      const value = F64.MAX_VALUE;

      tests.asserts.decimalEquals(
        BigDecimal.fromString("1.7976931348623157e+308"),
        decimals.fromFloat(value)
      );
    });
  });
  describe("fromInt", () => {
    test("returns BigDecimal from Integer", () => {
      const value = I64.MAX_VALUE;

      tests.asserts.decimalEquals(
        BigDecimal.fromString("9223372036854775807"),
        decimals.fromInt(value)
      );
    });
  });
  describe("toBigInt", () => {
    test("converts BigDecimal into BigInt", () => {
      const value = BigDecimal.fromString("100.525678");

      assert.bigIntEquals(
        BigInt.fromString("100525678"),
        decimals.toBigInt(value)
      );
    });
  });
  describe("min", () => {
    test("returns the minimum value", () => {
      const a = BigDecimal.fromString("100.525678");
      const b = BigDecimal.fromString("100.525679");

      tests.asserts.decimalEquals(a, decimals.min(a, b));
    });
  });
  describe("max", () => {
    test("returns the maximum value", () => {
      const a = BigDecimal.fromString("100.525678");
      const b = BigDecimal.fromString("100.525679");

      tests.asserts.decimalEquals(b, decimals.max(a, b));
    });
  });
});
