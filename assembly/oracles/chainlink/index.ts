import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { decimals, constants } from "../..";
import { Contract } from "./Contract";

export const USD_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000348"
);

export function fetchPrice(token: Address, unitAddress: Address): BigDecimal {
  const contract = Contract.bind(constants.addresses.CHAINLINK_FEED_REGISTRY);

  const latestRoundDataCall = contract.try_latestRoundData(token, unitAddress);

  const pairDecimalsCall = contract.try_decimals(token, unitAddress);

  const price = latestRoundDataCall.value.value1;
  const pairDecimals = pairDecimalsCall.value;

  return decimals.fromBigInt(price, pairDecimals as u8);
}

export function fetchPriceUSD(token: Address): BigDecimal {
  return fetchPrice(token, USD_ADDRESS);
}
