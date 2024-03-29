![ci](https://github.com/protofire/subgraph-devkit/actions/workflows/ci.yaml/badge.svg)

# Subgraph Devkit

Happiness kit for subgraph developers

### Features:

- [Oracles](#oracles)

  - [x] Token Price Fetching

- [Numbers](#numbers)

  - [x] Factories
  - [x] Conversion
  - [x] Helpers

- [Bytes](#bytes)

  - [x] Conversion

- [Testing](#testing)

  - [x] Mocking
  - [x] Assertions

- [Constants](#constants)
  - [x] Addresses
  - [x] Units

### Tech Stack:

- AssemblyScript
- Matchstick

### Installation:

```shell
yarn add @protofire/subgraph-devkit
```

### Documentation

#### Oracles

```typescript
import { Address } from "@graphprotocol/graph-ts";
import { oracles } from "@protofire/subgraph-devkit";

const tokenAddress = Address.fromString(
  "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
);

// get token price in usd from ChainLink oracle
oracles.chainlink.fetchPriceUSD(tokenAddress);

// get token price in usd from YearnLens oracle
oracles.yearnLens.fetchPriceUSD(tokenAddress);

// get token price in usd from Uniswap oracle
oracles.uniswap.fetchPriceUSD(tokenAddress);
```

#### Numbers

```typescript
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { decimals, integers } from "@protofire/subgraph-devkit";

// number 0 in BigDecimal
decimals.ZERO;

// number 1 in BigDecimal
decimals.ONE;

// number 0 in BigInt
integers.ZERO;

// number 1 in BigInt
integers.ONE;

// number 10 in BigInt
integers.TEN;

// Get min/max value
const a = BigInt.fromI32(100);
const b = BigInt.fromI32(101);

integers.min(a, b); // => 100
integers.max(a, b); // => 101

// Convert BigInt into Bytes
const n = BigInt.fromI32(100);
integers.toBytes(n);

// Create BigDecimal from BigInt
const n = BigInt.fromI32(1000000);
decimals.fromBigInt(n, 6); // => 1

// Create BigDecimal from Float
decimals.fromFloat(1000000.123);

// Create BigDecimal from Integer
decimals.fromInt(9223372036854775807);

// Convert BigDecimal to BigInt
const n = BigDecimal.fromString("1234.56");
decimals.toBigInt(n); // => 123456

// Get min/max value
const a = BigDecimal.fromString("100.525678");
const b = BigDecimal.fromString("100.525679");

decimals.min(a, b); // => 100.525678
decimals.max(a, b); // => 100.525679

// MakerDAO

// Create BigDecimal from RAD BigInt
const rad = BigInt.fromString(
  "12500000000000000000000000000000000000000000000"
);
decimals.fromRad(rad); // => 12.5;

// Create BigDecimal from WAD BigInt
const wad = BigInt.fromString("12500000000000000000");
decimals.fromWad(wad); // => 12.5

// Create BigDecimal from RAY BigInt
const ray = BigInt.fromString("12500000000000000000000000000");
decimals.fromRay(ray); // => 12.5

const value = BigDecimal.fromString("12.5");

// Convert BigDecimal into RAD BigInt
decimals.toRad(value); // => 12500000000000000000000000000000000000000000000

// Convert BigDecimal into RAY BigInt
decimals.toRay(value); // => 12500000000000000000000000000

// Convert BigDecimal into WAD BigInt
decimals.toWad(value); // => 12500000000000000000
```

#### Bytes

```typescript
import { bytes } from "@protofire/subgraph-devkit";

// Convert Bytes into Address
const stringAddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const bytesAddress = Bytes.fromHexString(stringAddress);
const address = bytes.toAddress(bytesAddress);

// Convert unsigned number in Bytes into BigInt
const bytesData = Bytes.fromHexString("0x28fc");
bytes.toUnsignedBigInt(bytesData); // => 10492

// Convert signed number in Bytes into BigInt
const bytesData = Bytes.fromHexString("0xd704");
bytes.toSignedBigInt(bytesData); // => -10492
```

#### Testing

```typescript
import { BigDecimal } from "@graphprotocol/graph-ts";
import { describe, test } from "matchstick-as/assembly/index";
import { tests } from "@protofire/subgraph-devkit";

describe("decimalEquals", () => {
  test("decimal equals to decimal", () => {
    const a = BigDeciaml.fromString("100");
    const b = BigDeciaml.fromString("100");

    tests.asserts.decimalEquals(a, b);
  });
});
```

#### Constants

```typescript
import { constants } from "@protofire/subgraph-devkit";

// USDC contract address
constants.addresses.USDC;

// WETH contract address
constants.addresses.WETH;

// UNISWAP_V2_ROUTER_02 contract address
constants.addresses.UNISWAP_V2_ROUTER_02;

// CHAINLINK_FEED_REGISTRY contract address
constants.addresses.CHAINLINK_FEED_REGISTRY;

// YEARN_LENS_ORACLE contract address
constants.addresses.YEARN_LENS_ORACLE;

// USDC unit (BigInt): 1000000
constants.units.USDC;

// MakerDAO

// WAD unit (BigInt): 1000000000000000000
constants.units.WAD;

// RAY unit (BigInt): 1000000000000000000000000000
constants.units.RAY;

// RAD unit (BigInt): 1000000000000000000000000000000000000000000000
constants.units.RAD;
```

### Contributing:

- **Fork** the repo on GitHub
- **Clone** the project to your own machine
- **Commit** changes to your own branch
- **Push** your work back up to your fork
- Submit a **Pull request** so that we can review your changes

### Running Tests

In order to be able to take advantage of matchstick testing library, we have added a dummy subgraph inside tests folder.
Tests will live inside that dummy subgraph and you can run them as follows:

```shell
yarn test
```
