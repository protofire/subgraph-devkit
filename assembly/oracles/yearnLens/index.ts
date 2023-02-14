import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { constants, decimals } from "../..";
import { Contract } from "./Contract";

export function fetchPriceUSD(tokenAddress: Address): BigDecimal {
  const contract = Contract.bind(constants.addresses.YEARN_LENS_ORACLE);

  const getPriceUsdcRecommendedCall =
    contract.try_getPriceUsdcRecommended(tokenAddress);

  return decimals.fromBigInt(getPriceUsdcRecommendedCall.value, 6);
}
