import { Address } from "@graphprotocol/graph-ts";
import { ERC20Contract } from "./ERC20Contract";

/**
 * Fetch the decimals of a token.
 * @param tokenAddress the token address.
 * @returns the decimals.
 */
export function fetchDecimals(tokenAddress: Address): u8 {
  const contract = ERC20Contract.bind(tokenAddress);
  const callResult = contract.try_decimals();

  return callResult.value as u8;
}
