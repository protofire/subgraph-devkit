import { Address, BigInt } from "@graphprotocol/graph-ts";
import { describe, test } from "matchstick-as";
import { decimals, tests, constants } from "../../../../assembly";
import { uniswap } from "../../../../assembly/oracles";

describe("Uniswap", () => {
  describe("fetchPriceUSD", () => {
    test("returns token price in BigDecimal", () => {
      const token = Address.fromString(
        "0x0000000000000000000000000000000000000001"
      );

      const price = BigInt.fromI32(1500000);

      tests.mocks.mock_ERC20_decimals(token, 6);
      tests.mocks.mock_ERC20_decimals(constants.addresses.USDC, 6);

      tests.mocks.mock_Uniswap_getAmountsOut(
        constants.units.USDC,
        [token, constants.addresses.WETH, constants.addresses.USDC],
        price
      );

      const expectedResult = decimals.fromBigInt(price, 6);
      const result = uniswap.fetchPriceUSD(token);

      tests.asserts.decimalEquals(result, expectedResult);
    });
  });
});
