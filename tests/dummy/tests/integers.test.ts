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
});
