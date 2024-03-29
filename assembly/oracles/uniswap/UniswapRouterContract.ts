import {
  ethereum,
  TypedMap,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class UniswapRouterContract__addLiquidityResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getAmountA(): BigInt {
    return this.value0;
  }

  getAmountB(): BigInt {
    return this.value1;
  }

  getLiquidity(): BigInt {
    return this.value2;
  }
}

export class UniswapRouterContract__removeLiquidityResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmountA(): BigInt {
    return this.value0;
  }

  getAmountB(): BigInt {
    return this.value1;
  }
}

export class UniswapRouterContract__removeLiquidityETHResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmountToken(): BigInt {
    return this.value0;
  }

  getAmountETH(): BigInt {
    return this.value1;
  }
}

export class UniswapRouterContract__removeLiquidityETHWithPermitResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmountToken(): BigInt {
    return this.value0;
  }

  getAmountETH(): BigInt {
    return this.value1;
  }
}

export class UniswapRouterContract__removeLiquidityWithPermitResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmountA(): BigInt {
    return this.value0;
  }

  getAmountB(): BigInt {
    return this.value1;
  }
}

export class UniswapRouterContract extends ethereum.SmartContract {
  static bind(address: Address): UniswapRouterContract {
    return new UniswapRouterContract("UniswapRouterContract", address);
  }

  WETH(): Address {
    let result = super.call("WETH", "WETH():(address)", []);

    return result[0].toAddress();
  }

  try_WETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH", "WETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addLiquidity(
    tokenA: Address,
    tokenB: Address,
    amountADesired: BigInt,
    amountBDesired: BigInt,
    amountAMin: BigInt,
    amountBMin: BigInt,
    to: Address,
    deadline: BigInt
  ): UniswapRouterContract__addLiquidityResult {
    let result = super.call(
      "addLiquidity",
      "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(amountADesired),
        ethereum.Value.fromUnsignedBigInt(amountBDesired),
        ethereum.Value.fromUnsignedBigInt(amountAMin),
        ethereum.Value.fromUnsignedBigInt(amountBMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return new UniswapRouterContract__addLiquidityResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_addLiquidity(
    tokenA: Address,
    tokenB: Address,
    amountADesired: BigInt,
    amountBDesired: BigInt,
    amountAMin: BigInt,
    amountBMin: BigInt,
    to: Address,
    deadline: BigInt
  ): ethereum.CallResult<UniswapRouterContract__addLiquidityResult> {
    let result = super.tryCall(
      "addLiquidity",
      "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(amountADesired),
        ethereum.Value.fromUnsignedBigInt(amountBDesired),
        ethereum.Value.fromUnsignedBigInt(amountAMin),
        ethereum.Value.fromUnsignedBigInt(amountBMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UniswapRouterContract__addLiquidityResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAmountIn(
    amountOut: BigInt,
    reserveIn: BigInt,
    reserveOut: BigInt
  ): BigInt {
    let result = super.call(
      "getAmountIn",
      "getAmountIn(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromUnsignedBigInt(reserveIn),
        ethereum.Value.fromUnsignedBigInt(reserveOut)
      ]
    );

    return result[0].toBigInt();
  }

  try_getAmountIn(
    amountOut: BigInt,
    reserveIn: BigInt,
    reserveOut: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAmountIn",
      "getAmountIn(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromUnsignedBigInt(reserveIn),
        ethereum.Value.fromUnsignedBigInt(reserveOut)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAmountOut(
    amountIn: BigInt,
    reserveIn: BigInt,
    reserveOut: BigInt
  ): BigInt {
    let result = super.call(
      "getAmountOut",
      "getAmountOut(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromUnsignedBigInt(reserveIn),
        ethereum.Value.fromUnsignedBigInt(reserveOut)
      ]
    );

    return result[0].toBigInt();
  }

  try_getAmountOut(
    amountIn: BigInt,
    reserveIn: BigInt,
    reserveOut: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAmountOut",
      "getAmountOut(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromUnsignedBigInt(reserveIn),
        ethereum.Value.fromUnsignedBigInt(reserveOut)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAmountsIn(amountOut: BigInt, path: Array<Address>): Array<BigInt> {
    let result = super.call(
      "getAmountsIn",
      "getAmountsIn(uint256,address[]):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromAddressArray(path)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getAmountsIn(
    amountOut: BigInt,
    path: Array<Address>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getAmountsIn",
      "getAmountsIn(uint256,address[]):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromAddressArray(path)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getAmountsOut(amountIn: BigInt, path: Array<Address>): Array<BigInt> {
    let result = super.call(
      "getAmountsOut",
      "getAmountsOut(uint256,address[]):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromAddressArray(path)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getAmountsOut(
    amountIn: BigInt,
    path: Array<Address>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getAmountsOut",
      "getAmountsOut(uint256,address[]):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromAddressArray(path)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  quote(amountA: BigInt, reserveA: BigInt, reserveB: BigInt): BigInt {
    let result = super.call(
      "quote",
      "quote(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountA),
        ethereum.Value.fromUnsignedBigInt(reserveA),
        ethereum.Value.fromUnsignedBigInt(reserveB)
      ]
    );

    return result[0].toBigInt();
  }

  try_quote(
    amountA: BigInt,
    reserveA: BigInt,
    reserveB: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "quote",
      "quote(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountA),
        ethereum.Value.fromUnsignedBigInt(reserveA),
        ethereum.Value.fromUnsignedBigInt(reserveB)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removeLiquidity(
    tokenA: Address,
    tokenB: Address,
    liquidity: BigInt,
    amountAMin: BigInt,
    amountBMin: BigInt,
    to: Address,
    deadline: BigInt
  ): UniswapRouterContract__removeLiquidityResult {
    let result = super.call(
      "removeLiquidity",
      "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountAMin),
        ethereum.Value.fromUnsignedBigInt(amountBMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return new UniswapRouterContract__removeLiquidityResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_removeLiquidity(
    tokenA: Address,
    tokenB: Address,
    liquidity: BigInt,
    amountAMin: BigInt,
    amountBMin: BigInt,
    to: Address,
    deadline: BigInt
  ): ethereum.CallResult<UniswapRouterContract__removeLiquidityResult> {
    let result = super.tryCall(
      "removeLiquidity",
      "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountAMin),
        ethereum.Value.fromUnsignedBigInt(amountBMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UniswapRouterContract__removeLiquidityResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  removeLiquidityETH(
    token: Address,
    liquidity: BigInt,
    amountTokenMin: BigInt,
    amountETHMin: BigInt,
    to: Address,
    deadline: BigInt
  ): UniswapRouterContract__removeLiquidityETHResult {
    let result = super.call(
      "removeLiquidityETH",
      "removeLiquidityETH(address,uint256,uint256,uint256,address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountTokenMin),
        ethereum.Value.fromUnsignedBigInt(amountETHMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return new UniswapRouterContract__removeLiquidityETHResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_removeLiquidityETH(
    token: Address,
    liquidity: BigInt,
    amountTokenMin: BigInt,
    amountETHMin: BigInt,
    to: Address,
    deadline: BigInt
  ): ethereum.CallResult<UniswapRouterContract__removeLiquidityETHResult> {
    let result = super.tryCall(
      "removeLiquidityETH",
      "removeLiquidityETH(address,uint256,uint256,uint256,address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountTokenMin),
        ethereum.Value.fromUnsignedBigInt(amountETHMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UniswapRouterContract__removeLiquidityETHResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  removeLiquidityETHSupportingFeeOnTransferTokens(
    token: Address,
    liquidity: BigInt,
    amountTokenMin: BigInt,
    amountETHMin: BigInt,
    to: Address,
    deadline: BigInt
  ): BigInt {
    let result = super.call(
      "removeLiquidityETHSupportingFeeOnTransferTokens",
      "removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountTokenMin),
        ethereum.Value.fromUnsignedBigInt(amountETHMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigInt();
  }

  try_removeLiquidityETHSupportingFeeOnTransferTokens(
    token: Address,
    liquidity: BigInt,
    amountTokenMin: BigInt,
    amountETHMin: BigInt,
    to: Address,
    deadline: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "removeLiquidityETHSupportingFeeOnTransferTokens",
      "removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountTokenMin),
        ethereum.Value.fromUnsignedBigInt(amountETHMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removeLiquidityETHWithPermit(
    token: Address,
    liquidity: BigInt,
    amountTokenMin: BigInt,
    amountETHMin: BigInt,
    to: Address,
    deadline: BigInt,
    approveMax: boolean,
    v: i32,
    r: Bytes,
    s: Bytes
  ): UniswapRouterContract__removeLiquidityETHWithPermitResult {
    let result = super.call(
      "removeLiquidityETHWithPermit",
      "removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountTokenMin),
        ethereum.Value.fromUnsignedBigInt(amountETHMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline),
        ethereum.Value.fromBoolean(approveMax),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return new UniswapRouterContract__removeLiquidityETHWithPermitResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_removeLiquidityETHWithPermit(
    token: Address,
    liquidity: BigInt,
    amountTokenMin: BigInt,
    amountETHMin: BigInt,
    to: Address,
    deadline: BigInt,
    approveMax: boolean,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<UniswapRouterContract__removeLiquidityETHWithPermitResult> {
    let result = super.tryCall(
      "removeLiquidityETHWithPermit",
      "removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountTokenMin),
        ethereum.Value.fromUnsignedBigInt(amountETHMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline),
        ethereum.Value.fromBoolean(approveMax),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UniswapRouterContract__removeLiquidityETHWithPermitResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
    token: Address,
    liquidity: BigInt,
    amountTokenMin: BigInt,
    amountETHMin: BigInt,
    to: Address,
    deadline: BigInt,
    approveMax: boolean,
    v: i32,
    r: Bytes,
    s: Bytes
  ): BigInt {
    let result = super.call(
      "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountTokenMin),
        ethereum.Value.fromUnsignedBigInt(amountETHMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline),
        ethereum.Value.fromBoolean(approveMax),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toBigInt();
  }

  try_removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
    token: Address,
    liquidity: BigInt,
    amountTokenMin: BigInt,
    amountETHMin: BigInt,
    to: Address,
    deadline: BigInt,
    approveMax: boolean,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountTokenMin),
        ethereum.Value.fromUnsignedBigInt(amountETHMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline),
        ethereum.Value.fromBoolean(approveMax),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removeLiquidityWithPermit(
    tokenA: Address,
    tokenB: Address,
    liquidity: BigInt,
    amountAMin: BigInt,
    amountBMin: BigInt,
    to: Address,
    deadline: BigInt,
    approveMax: boolean,
    v: i32,
    r: Bytes,
    s: Bytes
  ): UniswapRouterContract__removeLiquidityWithPermitResult {
    let result = super.call(
      "removeLiquidityWithPermit",
      "removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountAMin),
        ethereum.Value.fromUnsignedBigInt(amountBMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline),
        ethereum.Value.fromBoolean(approveMax),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return new UniswapRouterContract__removeLiquidityWithPermitResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_removeLiquidityWithPermit(
    tokenA: Address,
    tokenB: Address,
    liquidity: BigInt,
    amountAMin: BigInt,
    amountBMin: BigInt,
    to: Address,
    deadline: BigInt,
    approveMax: boolean,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<UniswapRouterContract__removeLiquidityWithPermitResult> {
    let result = super.tryCall(
      "removeLiquidityWithPermit",
      "removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(liquidity),
        ethereum.Value.fromUnsignedBigInt(amountAMin),
        ethereum.Value.fromUnsignedBigInt(amountBMin),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline),
        ethereum.Value.fromBoolean(approveMax),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UniswapRouterContract__removeLiquidityWithPermitResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  swapExactTokensForETH(
    amountIn: BigInt,
    amountOutMin: BigInt,
    path: Array<Address>,
    to: Address,
    deadline: BigInt
  ): Array<BigInt> {
    let result = super.call(
      "swapExactTokensForETH",
      "swapExactTokensForETH(uint256,uint256,address[],address,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromUnsignedBigInt(amountOutMin),
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_swapExactTokensForETH(
    amountIn: BigInt,
    amountOutMin: BigInt,
    path: Array<Address>,
    to: Address,
    deadline: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "swapExactTokensForETH",
      "swapExactTokensForETH(uint256,uint256,address[],address,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromUnsignedBigInt(amountOutMin),
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  swapExactTokensForTokens(
    amountIn: BigInt,
    amountOutMin: BigInt,
    path: Array<Address>,
    to: Address,
    deadline: BigInt
  ): Array<BigInt> {
    let result = super.call(
      "swapExactTokensForTokens",
      "swapExactTokensForTokens(uint256,uint256,address[],address,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromUnsignedBigInt(amountOutMin),
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_swapExactTokensForTokens(
    amountIn: BigInt,
    amountOutMin: BigInt,
    path: Array<Address>,
    to: Address,
    deadline: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "swapExactTokensForTokens",
      "swapExactTokensForTokens(uint256,uint256,address[],address,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromUnsignedBigInt(amountOutMin),
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  swapTokensForExactETH(
    amountOut: BigInt,
    amountInMax: BigInt,
    path: Array<Address>,
    to: Address,
    deadline: BigInt
  ): Array<BigInt> {
    let result = super.call(
      "swapTokensForExactETH",
      "swapTokensForExactETH(uint256,uint256,address[],address,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromUnsignedBigInt(amountInMax),
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_swapTokensForExactETH(
    amountOut: BigInt,
    amountInMax: BigInt,
    path: Array<Address>,
    to: Address,
    deadline: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "swapTokensForExactETH",
      "swapTokensForExactETH(uint256,uint256,address[],address,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromUnsignedBigInt(amountInMax),
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  swapTokensForExactTokens(
    amountOut: BigInt,
    amountInMax: BigInt,
    path: Array<Address>,
    to: Address,
    deadline: BigInt
  ): Array<BigInt> {
    let result = super.call(
      "swapTokensForExactTokens",
      "swapTokensForExactTokens(uint256,uint256,address[],address,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromUnsignedBigInt(amountInMax),
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_swapTokensForExactTokens(
    amountOut: BigInt,
    amountInMax: BigInt,
    path: Array<Address>,
    to: Address,
    deadline: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "swapTokensForExactTokens",
      "swapTokensForExactTokens(uint256,uint256,address[],address,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromUnsignedBigInt(amountInMax),
        ethereum.Value.fromAddressArray(path),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _WETH(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddLiquidityCall extends ethereum.Call {
  get inputs(): AddLiquidityCall__Inputs {
    return new AddLiquidityCall__Inputs(this);
  }

  get outputs(): AddLiquidityCall__Outputs {
    return new AddLiquidityCall__Outputs(this);
  }
}

export class AddLiquidityCall__Inputs {
  _call: AddLiquidityCall;

  constructor(call: AddLiquidityCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amountADesired(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountBDesired(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get amountAMin(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get amountBMin(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class AddLiquidityCall__Outputs {
  _call: AddLiquidityCall;

  constructor(call: AddLiquidityCall) {
    this._call = call;
  }

  get amountA(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amountB(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
  }
}

export class AddLiquidityETHCall extends ethereum.Call {
  get inputs(): AddLiquidityETHCall__Inputs {
    return new AddLiquidityETHCall__Inputs(this);
  }

  get outputs(): AddLiquidityETHCall__Outputs {
    return new AddLiquidityETHCall__Outputs(this);
  }
}

export class AddLiquidityETHCall__Inputs {
  _call: AddLiquidityETHCall;

  constructor(call: AddLiquidityETHCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amountTokenDesired(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountTokenMin(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountETHMin(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class AddLiquidityETHCall__Outputs {
  _call: AddLiquidityETHCall;

  constructor(call: AddLiquidityETHCall) {
    this._call = call;
  }

  get amountToken(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amountETH(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
  }
}

export class RemoveLiquidityCall extends ethereum.Call {
  get inputs(): RemoveLiquidityCall__Inputs {
    return new RemoveLiquidityCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityCall__Outputs {
    return new RemoveLiquidityCall__Outputs(this);
  }
}

export class RemoveLiquidityCall__Inputs {
  _call: RemoveLiquidityCall;

  constructor(call: RemoveLiquidityCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountAMin(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get amountBMin(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class RemoveLiquidityCall__Outputs {
  _call: RemoveLiquidityCall;

  constructor(call: RemoveLiquidityCall) {
    this._call = call;
  }

  get amountA(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amountB(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class RemoveLiquidityETHCall extends ethereum.Call {
  get inputs(): RemoveLiquidityETHCall__Inputs {
    return new RemoveLiquidityETHCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityETHCall__Outputs {
    return new RemoveLiquidityETHCall__Outputs(this);
  }
}

export class RemoveLiquidityETHCall__Inputs {
  _call: RemoveLiquidityETHCall;

  constructor(call: RemoveLiquidityETHCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountTokenMin(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountETHMin(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class RemoveLiquidityETHCall__Outputs {
  _call: RemoveLiquidityETHCall;

  constructor(call: RemoveLiquidityETHCall) {
    this._call = call;
  }

  get amountToken(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amountETH(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class RemoveLiquidityETHSupportingFeeOnTransferTokensCall extends ethereum.Call {
  get inputs(): RemoveLiquidityETHSupportingFeeOnTransferTokensCall__Inputs {
    return new RemoveLiquidityETHSupportingFeeOnTransferTokensCall__Inputs(
      this
    );
  }

  get outputs(): RemoveLiquidityETHSupportingFeeOnTransferTokensCall__Outputs {
    return new RemoveLiquidityETHSupportingFeeOnTransferTokensCall__Outputs(
      this
    );
  }
}

export class RemoveLiquidityETHSupportingFeeOnTransferTokensCall__Inputs {
  _call: RemoveLiquidityETHSupportingFeeOnTransferTokensCall;

  constructor(call: RemoveLiquidityETHSupportingFeeOnTransferTokensCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountTokenMin(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountETHMin(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class RemoveLiquidityETHSupportingFeeOnTransferTokensCall__Outputs {
  _call: RemoveLiquidityETHSupportingFeeOnTransferTokensCall;

  constructor(call: RemoveLiquidityETHSupportingFeeOnTransferTokensCall) {
    this._call = call;
  }

  get amountETH(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RemoveLiquidityETHWithPermitCall extends ethereum.Call {
  get inputs(): RemoveLiquidityETHWithPermitCall__Inputs {
    return new RemoveLiquidityETHWithPermitCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityETHWithPermitCall__Outputs {
    return new RemoveLiquidityETHWithPermitCall__Outputs(this);
  }
}

export class RemoveLiquidityETHWithPermitCall__Inputs {
  _call: RemoveLiquidityETHWithPermitCall;

  constructor(call: RemoveLiquidityETHWithPermitCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountTokenMin(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountETHMin(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get approveMax(): boolean {
    return this._call.inputValues[6].value.toBoolean();
  }

  get v(): i32 {
    return this._call.inputValues[7].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[9].value.toBytes();
  }
}

export class RemoveLiquidityETHWithPermitCall__Outputs {
  _call: RemoveLiquidityETHWithPermitCall;

  constructor(call: RemoveLiquidityETHWithPermitCall) {
    this._call = call;
  }

  get amountToken(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amountETH(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall extends ethereum.Call {
  get inputs(): RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall__Inputs {
    return new RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall__Inputs(
      this
    );
  }

  get outputs(): RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall__Outputs {
    return new RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall__Outputs(
      this
    );
  }
}

export class RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall__Inputs {
  _call: RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall;

  constructor(
    call: RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall
  ) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountTokenMin(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountETHMin(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get approveMax(): boolean {
    return this._call.inputValues[6].value.toBoolean();
  }

  get v(): i32 {
    return this._call.inputValues[7].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[9].value.toBytes();
  }
}

export class RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall__Outputs {
  _call: RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall;

  constructor(
    call: RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensCall
  ) {
    this._call = call;
  }

  get amountETH(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RemoveLiquidityWithPermitCall extends ethereum.Call {
  get inputs(): RemoveLiquidityWithPermitCall__Inputs {
    return new RemoveLiquidityWithPermitCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityWithPermitCall__Outputs {
    return new RemoveLiquidityWithPermitCall__Outputs(this);
  }
}

export class RemoveLiquidityWithPermitCall__Inputs {
  _call: RemoveLiquidityWithPermitCall;

  constructor(call: RemoveLiquidityWithPermitCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountAMin(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get amountBMin(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get approveMax(): boolean {
    return this._call.inputValues[7].value.toBoolean();
  }

  get v(): i32 {
    return this._call.inputValues[8].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[9].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[10].value.toBytes();
  }
}

export class RemoveLiquidityWithPermitCall__Outputs {
  _call: RemoveLiquidityWithPermitCall;

  constructor(call: RemoveLiquidityWithPermitCall) {
    this._call = call;
  }

  get amountA(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amountB(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class SwapETHForExactTokensCall extends ethereum.Call {
  get inputs(): SwapETHForExactTokensCall__Inputs {
    return new SwapETHForExactTokensCall__Inputs(this);
  }

  get outputs(): SwapETHForExactTokensCall__Outputs {
    return new SwapETHForExactTokensCall__Outputs(this);
  }
}

export class SwapETHForExactTokensCall__Inputs {
  _call: SwapETHForExactTokensCall;

  constructor(call: SwapETHForExactTokensCall) {
    this._call = call;
  }

  get amountOut(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SwapETHForExactTokensCall__Outputs {
  _call: SwapETHForExactTokensCall;

  constructor(call: SwapETHForExactTokensCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class SwapExactETHForTokensCall extends ethereum.Call {
  get inputs(): SwapExactETHForTokensCall__Inputs {
    return new SwapExactETHForTokensCall__Inputs(this);
  }

  get outputs(): SwapExactETHForTokensCall__Outputs {
    return new SwapExactETHForTokensCall__Outputs(this);
  }
}

export class SwapExactETHForTokensCall__Inputs {
  _call: SwapExactETHForTokensCall;

  constructor(call: SwapExactETHForTokensCall) {
    this._call = call;
  }

  get amountOutMin(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SwapExactETHForTokensCall__Outputs {
  _call: SwapExactETHForTokensCall;

  constructor(call: SwapExactETHForTokensCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class SwapExactETHForTokensSupportingFeeOnTransferTokensCall extends ethereum.Call {
  get inputs(): SwapExactETHForTokensSupportingFeeOnTransferTokensCall__Inputs {
    return new SwapExactETHForTokensSupportingFeeOnTransferTokensCall__Inputs(
      this
    );
  }

  get outputs(): SwapExactETHForTokensSupportingFeeOnTransferTokensCall__Outputs {
    return new SwapExactETHForTokensSupportingFeeOnTransferTokensCall__Outputs(
      this
    );
  }
}

export class SwapExactETHForTokensSupportingFeeOnTransferTokensCall__Inputs {
  _call: SwapExactETHForTokensSupportingFeeOnTransferTokensCall;

  constructor(call: SwapExactETHForTokensSupportingFeeOnTransferTokensCall) {
    this._call = call;
  }

  get amountOutMin(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SwapExactETHForTokensSupportingFeeOnTransferTokensCall__Outputs {
  _call: SwapExactETHForTokensSupportingFeeOnTransferTokensCall;

  constructor(call: SwapExactETHForTokensSupportingFeeOnTransferTokensCall) {
    this._call = call;
  }
}

export class SwapExactTokensForETHCall extends ethereum.Call {
  get inputs(): SwapExactTokensForETHCall__Inputs {
    return new SwapExactTokensForETHCall__Inputs(this);
  }

  get outputs(): SwapExactTokensForETHCall__Outputs {
    return new SwapExactTokensForETHCall__Outputs(this);
  }
}

export class SwapExactTokensForETHCall__Inputs {
  _call: SwapExactTokensForETHCall;

  constructor(call: SwapExactTokensForETHCall) {
    this._call = call;
  }

  get amountIn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountOutMin(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SwapExactTokensForETHCall__Outputs {
  _call: SwapExactTokensForETHCall;

  constructor(call: SwapExactTokensForETHCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class SwapExactTokensForETHSupportingFeeOnTransferTokensCall extends ethereum.Call {
  get inputs(): SwapExactTokensForETHSupportingFeeOnTransferTokensCall__Inputs {
    return new SwapExactTokensForETHSupportingFeeOnTransferTokensCall__Inputs(
      this
    );
  }

  get outputs(): SwapExactTokensForETHSupportingFeeOnTransferTokensCall__Outputs {
    return new SwapExactTokensForETHSupportingFeeOnTransferTokensCall__Outputs(
      this
    );
  }
}

export class SwapExactTokensForETHSupportingFeeOnTransferTokensCall__Inputs {
  _call: SwapExactTokensForETHSupportingFeeOnTransferTokensCall;

  constructor(call: SwapExactTokensForETHSupportingFeeOnTransferTokensCall) {
    this._call = call;
  }

  get amountIn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountOutMin(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SwapExactTokensForETHSupportingFeeOnTransferTokensCall__Outputs {
  _call: SwapExactTokensForETHSupportingFeeOnTransferTokensCall;

  constructor(call: SwapExactTokensForETHSupportingFeeOnTransferTokensCall) {
    this._call = call;
  }
}

export class SwapExactTokensForTokensCall extends ethereum.Call {
  get inputs(): SwapExactTokensForTokensCall__Inputs {
    return new SwapExactTokensForTokensCall__Inputs(this);
  }

  get outputs(): SwapExactTokensForTokensCall__Outputs {
    return new SwapExactTokensForTokensCall__Outputs(this);
  }
}

export class SwapExactTokensForTokensCall__Inputs {
  _call: SwapExactTokensForTokensCall;

  constructor(call: SwapExactTokensForTokensCall) {
    this._call = call;
  }

  get amountIn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountOutMin(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SwapExactTokensForTokensCall__Outputs {
  _call: SwapExactTokensForTokensCall;

  constructor(call: SwapExactTokensForTokensCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class SwapExactTokensForTokensSupportingFeeOnTransferTokensCall extends ethereum.Call {
  get inputs(): SwapExactTokensForTokensSupportingFeeOnTransferTokensCall__Inputs {
    return new SwapExactTokensForTokensSupportingFeeOnTransferTokensCall__Inputs(
      this
    );
  }

  get outputs(): SwapExactTokensForTokensSupportingFeeOnTransferTokensCall__Outputs {
    return new SwapExactTokensForTokensSupportingFeeOnTransferTokensCall__Outputs(
      this
    );
  }
}

export class SwapExactTokensForTokensSupportingFeeOnTransferTokensCall__Inputs {
  _call: SwapExactTokensForTokensSupportingFeeOnTransferTokensCall;

  constructor(call: SwapExactTokensForTokensSupportingFeeOnTransferTokensCall) {
    this._call = call;
  }

  get amountIn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountOutMin(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SwapExactTokensForTokensSupportingFeeOnTransferTokensCall__Outputs {
  _call: SwapExactTokensForTokensSupportingFeeOnTransferTokensCall;

  constructor(call: SwapExactTokensForTokensSupportingFeeOnTransferTokensCall) {
    this._call = call;
  }
}

export class SwapTokensForExactETHCall extends ethereum.Call {
  get inputs(): SwapTokensForExactETHCall__Inputs {
    return new SwapTokensForExactETHCall__Inputs(this);
  }

  get outputs(): SwapTokensForExactETHCall__Outputs {
    return new SwapTokensForExactETHCall__Outputs(this);
  }
}

export class SwapTokensForExactETHCall__Inputs {
  _call: SwapTokensForExactETHCall;

  constructor(call: SwapTokensForExactETHCall) {
    this._call = call;
  }

  get amountOut(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountInMax(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SwapTokensForExactETHCall__Outputs {
  _call: SwapTokensForExactETHCall;

  constructor(call: SwapTokensForExactETHCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class SwapTokensForExactTokensCall extends ethereum.Call {
  get inputs(): SwapTokensForExactTokensCall__Inputs {
    return new SwapTokensForExactTokensCall__Inputs(this);
  }

  get outputs(): SwapTokensForExactTokensCall__Outputs {
    return new SwapTokensForExactTokensCall__Outputs(this);
  }
}

export class SwapTokensForExactTokensCall__Inputs {
  _call: SwapTokensForExactTokensCall;

  constructor(call: SwapTokensForExactTokensCall) {
    this._call = call;
  }

  get amountOut(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountInMax(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get path(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SwapTokensForExactTokensCall__Outputs {
  _call: SwapTokensForExactTokensCall;

  constructor(call: SwapTokensForExactTokensCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}
