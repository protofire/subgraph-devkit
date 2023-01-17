import { Address, BigInt } from "@graphprotocol/graph-ts";
import { describe, test } from "matchstick-as";
import { decimals, tests } from "../../../../assembly";
import { chainlink } from "../../../../assembly/oracles";

describe("ChainLink", () => {
  describe("fetchPrice", () => {
    test("returns token price in BigDecimal", () => {
      const token = Address.fromString(
        "0x0000000000000000000000000000000000000001"
      );

      const price = BigInt.fromI32(1500000);

      tests.mocks.mockChainLink(
        chainlink.CONTRACT_ADDRESS,
        token,
        chainlink.USD_ADDRESS,
        price,
        6
      );

      const expectedResult = decimals.fromBigInt(price, 6);
      const result = chainlink.fetchPrice(token, chainlink.USD_ADDRESS);

      tests.asserts.decimalEquals(result, expectedResult);
    });
  });
});
