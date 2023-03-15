import { assert, describe, test } from "matchstick-as/assembly/index";
import { BigInt } from "@graphprotocol/graph-ts";
import { integers } from "../../../assembly";

describe("Integers", () => {
  describe("ZERO", () => {
    test("returns number zero in BigInt", () => {
      assert.bigIntEquals(integers.ZERO, BigInt.fromI32(0));
    });
  });
  describe("ONE", () => {
    test("returns number one in BigInt", () => {
      assert.bigIntEquals(integers.ONE, BigInt.fromI32(1));
    });
  });
  describe("TEN", () => {
    test("returns number ten in BigInt", () => {
      assert.bigIntEquals(integers.TEN, BigInt.fromI32(10));
    });
  });
  describe("min", () => {
    test("returns the minimum value", () => {
      const a = BigInt.fromI32(100);
      const b = BigInt.fromI32(101);

      assert.bigIntEquals(a, integers.min(a, b));
    });
  });
  describe("max", () => {
    test("returns the maximum value", () => {
      const a = BigInt.fromI32(100);
      const b = BigInt.fromI32(101);

      assert.bigIntEquals(b, integers.max(a, b));
    });
  });
});
