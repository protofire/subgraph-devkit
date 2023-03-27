import { Address } from "@graphprotocol/graph-ts";

/**
 * The address of the WETH contract.
 * @example
 * ```
 * import { addresses } from "@protofire/subgraph-devkit";
 *
 * addresses.WETH; // => "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
 * ```
 * @returns the WETH address.
 */
export const WETH = Address.fromString(
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
);

/**
 * The address of the USDC contract.
 * @example
 * ```
 * import { addresses } from "@protofire/subgraph-devkit";
 *
 * addresses.USDC; // => "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
 * ```
 * @returns the USDC address.
 */
export const USDC = Address.fromString(
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
);

/**
 * The address of the DAI contract.
 * @example
 * ```
 * import { addresses } from "@protofire/subgraph-devkit";
 *
 * addresses.DAI; // => "0x6b175474e89094c44da98b954eedeac495271d0f"
 * ```
 * @returns the DAI address.
 */
export const UNISWAP_V2_ROUTER_02 = Address.fromString(
  "0x7a250d5630b4cf539739df2c5dacb4c659f2488d"
);

/**
 * The address of the CHAINLINK_FEED_REGISTRY contract.
 * @example
 * ```
 * import { addresses } from "@protofire/subgraph-devkit";
 *
 * addresses.CHAINLINK_FEED_REGISTRY; // => "0x47fb2585d2c56fe188d0e6ec628a38b74fceeedf"
 * ```
 * @returns the CHAINLINK_FEED_REGISTRY address.
 */
export const CHAINLINK_FEED_REGISTRY = Address.fromString(
  "0x47fb2585d2c56fe188d0e6ec628a38b74fceeedf"
);

/**
 * The address of the YEARN_LENS_ORACLE contract.
 * @example
 * ```
 * import { addresses } from "@protofire/subgraph-devkit";
 *
 * addresses.YEARN_LENS_ORACLE; // => "0x83d95e0d5f402511db06817aff3f9ea88224b030"
 * ```
 * @returns the YEARN_LENS_ORACLE address.
 */
export const YEARN_LENS_ORACLE = Address.fromString(
  "0x83d95e0d5f402511db06817aff3f9ea88224b030"
);
