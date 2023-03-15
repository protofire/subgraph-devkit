import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts";

export function toAddress(bytes: Bytes): Address {
  return Address.fromBytes(bytes);
}

export function toUnsignedBigInt(bytes: Bytes, bigEndian: bool = true): BigInt {
  const value = bigEndian ? (bytes.reverse() as Bytes) : bytes;
  return BigInt.fromUnsignedBytes(value);
}

export function toSignedBigInt(bytes: Bytes, bigEndian: bool = true): BigInt {
  const value = bigEndian ? (bytes.reverse() as Bytes) : bytes;
  return BigInt.fromSignedBytes(value);
}
