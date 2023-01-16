import { assert, describe, test } from "matchstick-as/assembly/index";
import { BigInt } from "@graphprotocol/graph-ts";
import { integers } from "../../../assembly";

describe("Integers", () => {
  describe("ONE", () => {
    test("works", () => {
      assert.bigIntEquals(integers.ONE, BigInt.fromI32(1));
    });
  });
});
