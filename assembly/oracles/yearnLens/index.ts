import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { decimals } from "../..";
import { Contract } from "./Contract";

export const CONTRACT_ADDRESS = Address.fromString(
  "0x83d95e0d5f402511db06817aff3f9ea88224b030"
);

export function fetchPrice(tokenAddress: Address): BigDecimal {
  const contract = Contract.bind(CONTRACT_ADDRESS);

  const getPriceUsdcRecommendedCall =
    contract.try_getPriceUsdcRecommended(tokenAddress);

  return decimals.fromBigInt(getPriceUsdcRecommendedCall.value, 6);
}
