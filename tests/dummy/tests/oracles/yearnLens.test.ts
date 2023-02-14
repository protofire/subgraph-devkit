import { Address, BigInt } from "@graphprotocol/graph-ts";
import { describe, test } from "matchstick-as";
import { decimals, tests } from "../../../../assembly";
import { yearnLens } from "../../../../assembly/oracles";

describe("YearnLens", () => {
  describe("fetchPriceUSD", () => {
    test("returns token price in BigDecimal", () => {
      const token = Address.fromString(
        "0x0000000000000000000000000000000000000001"
      );

      const price = BigInt.fromI32(1500000);

      tests.mocks.mockYearnLens(token, price);

      const expectedResult = decimals.fromBigInt(price, 6);
      const result = yearnLens.fetchPriceUSD(token);

      tests.asserts.decimalEquals(result, expectedResult);
    });
  });
});
