import { Address } from "@graphprotocol/graph-ts";
import { integers } from ".";

export namespace addresses {
  export const WETH = Address.fromString(
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
  );
  export const USDC = Address.fromString(
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
  );
}

export namespace units {
  export const USDC = integers.TEN.pow(6);
}
