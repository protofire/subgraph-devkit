import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts";
import { describe, test, assert } from "matchstick-as/assembly/index";
import { bytes } from "../../../assembly";

describe("Bytes", () => {
  describe("toAddress", () => {
    test("converts Bytes into Address", () => {
      const stringAddress = "0x0000000000000000000000000000000000000001";
      const bytesData = Bytes.fromHexString(stringAddress);
      const result = bytes.toAddress(bytesData);

      assert.addressEquals(Address.fromString(stringAddress), result);
    });
  });

  describe("toUnsignedBigInt", () => {
    // dec 10492 = hex 28fc = bigEndian 0x28fc = littleEndian 0xfc28

    describe("when littleEndian", () => {
      test("converts Bytes into BigInt", () => {
        const littleEndianBytes = Bytes.fromHexString("0xfc28");
        const result = bytes.toUnsignedBigInt(littleEndianBytes, false);

        assert.bigIntEquals(BigInt.fromI32(10492), result);
      });
    });

    describe("when bigEndian", () => {
      test("converts Bytes into BigInt", () => {
        const bigEndianBytes = Bytes.fromHexString("0x28fc");
        const result = bytes.toUnsignedBigInt(bigEndianBytes);

        assert.bigIntEquals(BigInt.fromI32(10492), result);
      });
    });
  });

  describe("toSignedBigInt", () => {
    // dec -10492 = hex -28fc = bigEndian 0xd704 = littleEndian 0x04d7

    describe("when littleEndian", () => {
      test("converts Bytes into BigInt", () => {
        const littleEndianBytes = Bytes.fromHexString("0x04d7");
        const result = bytes.toSignedBigInt(littleEndianBytes, false);

        assert.bigIntEquals(BigInt.fromI32(-10492), result);
      });
    });

    describe("when bigEndian", () => {
      test("converts Bytes into BigInt", () => {
        const bigEndianBytes = Bytes.fromHexString("0xd704");
        const result = bytes.toSignedBigInt(bigEndianBytes);

        assert.bigIntEquals(BigInt.fromI32(-10492), result);
      });
    });
  });
});
