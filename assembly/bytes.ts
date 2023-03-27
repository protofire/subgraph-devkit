import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts";

/**
 * Converts Bytes into Address.
 * @example
 * ```
 * import { bytes } from "@protofire/subgraph-devkit";
 *
 * const bytesAddress = Bytes.fromHexString("0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984");
 * bytes.toAddress(bytesAddress);
 * ```
 *
 * @param bytes the Bytes.
 * @returns the Address representation of the Bytes.
 */
export function toAddress(bytes: Bytes): Address {
  return Address.fromBytes(bytes);
}

/**
 * Converts Bytes into unsigned BigInt.
 * @example
 * ```
 * import { bytes } from "@protofire/subgraph-devkit";
 *
 * const bytesData = Bytes.fromHexString("0x28fc");
 * bytes.toUnsignedBigInt(bytesData); // => 10492
 * ```
 *
 * @param bytes the Bytes.
 * @param bigEndian whether the bytes are big endian or not.
 * @returns the unsigned BigInt representation of the Bytes.
 */
export function toUnsignedBigInt(bytes: Bytes, bigEndian: bool = true): BigInt {
  const value = bigEndian ? (bytes.reverse() as Bytes) : bytes;
  return BigInt.fromUnsignedBytes(value);
}

/**
 * Converts Bytes into signed BigInt.
 * @example
 * ```
 * import { bytes } from "@protofire/subgraph-devkit";
 *
 * const bytesData = Bytes.fromHexString("0xd704");
 * bytes.toSignedBigInt(bytesData); // => -10492
 * ```
 *
 * @param bytes the Bytes.
 * @param bigEndian whether the bytes are big endian or not.
 * @returns the signed BigInt representation of the Bytes.
 */
export function toSignedBigInt(bytes: Bytes, bigEndian: bool = true): BigInt {
  const value = bigEndian ? (bytes.reverse() as Bytes) : bytes;
  return BigInt.fromSignedBytes(value);
}
