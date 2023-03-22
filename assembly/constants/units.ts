import { BigInt } from "@graphprotocol/graph-ts";
import { integers } from "..";

export const USDC = integers.TEN.pow(6);

// MakerDAO
export const WAD = BigInt.fromString("1000000000000000000");
export const RAY = BigInt.fromString("1000000000000000000000000000");
export const RAD = BigInt.fromString(
  "1000000000000000000000000000000000000000000000"
);
