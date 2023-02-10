![ci](https://github.com/protofire/subgraph-devkit/actions/workflows/ci.yaml/badge.svg)

# Subgraph Devkit

Happiness kit for subgraph developers

### Features:

- [Oracles](#oracles)
  - [x] Token Price Fetching

- [Numbers](#numbers)

  - [x] Factories
  - [x] Conversion

- [Testing](#testing)
  - [x] Mocking
  - [x] Assertions

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

const tokenAddress = Address.fromString("0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984")

// get token price in usd from ChainLink oracle
oracles.chainlink.fetchPrice(tokenAddress)

// get token price in usd from yearnLens oracle
oracles.yearnLens.fetchPrice(tokenAddress)
```

#### Numbers

```typescript
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { decimals, integers } from "@protofire/subgraph-devkit";

// number 0 in BigDecimal
decimals.ZERO

// number 1 in BigDecimal
decimals.ONE

// number 0 in BigInt
integers.ZERO

// number 1 in BigInt
integers.ONE

// number 10 in BigInt
integers.TEN

// Create BigDecimal from BigInt
const n = BigInt.fromI32(1000000)
decimals.fromBigInt(n, 6) // => 1

// Create BigDecimal from Float
decimals.fromFloat(1000000.123)

// Create BigDecimal from Integer
decimals.fromInt(9223372036854775807)

// Convert BigDecimal to BigInt
const n = BigDecimal.fromString("1234.56")
decimals.toBigInt(n) // => 123456
```

#### Testing

```typescript
import { BigDecimal } from "@graphprotocol/graph-ts";
import { describe, test } from "matchstick-as/assembly/index";
import { tests } from "@protofire/subgraph-devkit";

describe("decimalEquals", () => {
  test("decimal equals to decimal", () => {
    const a = BigDeciaml.fromString("100")
    const b = BigDeciaml.fromString("100")
    
    tests.asserts.decimalEquals(a, b)
  })
})
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
