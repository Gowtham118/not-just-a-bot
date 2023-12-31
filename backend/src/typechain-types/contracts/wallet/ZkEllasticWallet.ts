/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type UserOperationStruct = {
  sender: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  initCode: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
  callGasLimit: PromiseOrValue<BigNumberish>;
  verificationGasLimit: PromiseOrValue<BigNumberish>;
  preVerificationGas: PromiseOrValue<BigNumberish>;
  maxFeePerGas: PromiseOrValue<BigNumberish>;
  maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
  paymasterAndData: PromiseOrValue<BytesLike>;
  signature: PromiseOrValue<BytesLike>;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface ZkEllasticWalletInterface extends utils.Interface {
  functions: {
    "entryPoint()": FunctionFragment;
    "execute(address,uint256,bytes)": FunctionFragment;
    "executeBatch(address[],bytes[])": FunctionFragment;
    "getNonce()": FunctionFragment;
    "nonce()": FunctionFragment;
    "pwdhash()": FunctionFragment;
    "resetPassword(uint256[8],uint256,uint256,uint256[8],uint256,uint256,uint256)": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    "verify(address,uint256[8],uint256,uint256,uint256)": FunctionFragment;
    "zknonce()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "entryPoint"
      | "execute"
      | "executeBatch"
      | "getNonce"
      | "nonce"
      | "pwdhash"
      | "resetPassword"
      | "validateUserOp"
      | "verify"
      | "zknonce"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBatch",
    values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(functionFragment: "pwdhash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "resetPassword",
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      UserOperationStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "zknonce", values?: undefined): string;

  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pwdhash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "resetPassword",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zknonce", data: BytesLike): Result;

  events: {
    "SetPassword(address,uint256)": EventFragment;
    "Verified(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetPassword"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Verified"): EventFragment;
}

export interface SetPasswordEventObject {
  user: string;
  pwdhash: BigNumber;
}
export type SetPasswordEvent = TypedEvent<
  [string, BigNumber],
  SetPasswordEventObject
>;

export type SetPasswordEventFilter = TypedEventFilter<SetPasswordEvent>;

export interface VerifiedEventObject {
  user: string;
  nonce: BigNumber;
}
export type VerifiedEvent = TypedEvent<
  [string, BigNumber],
  VerifiedEventObject
>;

export type VerifiedEventFilter = TypedEventFilter<VerifiedEvent>;

export interface ZkEllasticWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZkEllasticWalletInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    pwdhash(overrides?: CallOverrides): Promise<[BigNumber]>;

    resetPassword(
      proof1: PromiseOrValue<BigNumberish>[],
      expiration1: PromiseOrValue<BigNumberish>,
      allhash1: PromiseOrValue<BigNumberish>,
      proof2: PromiseOrValue<BigNumberish>[],
      pwdhash2: PromiseOrValue<BigNumberish>,
      expiration2: PromiseOrValue<BigNumberish>,
      allhash2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verify(
      user: PromiseOrValue<string>,
      proof: PromiseOrValue<BigNumberish>[],
      datahash: PromiseOrValue<BigNumberish>,
      expiration: PromiseOrValue<BigNumberish>,
      allhash: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    zknonce(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  entryPoint(overrides?: CallOverrides): Promise<string>;

  execute(
    dest: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    func: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeBatch(
    dest: PromiseOrValue<string>[],
    func: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getNonce(overrides?: CallOverrides): Promise<BigNumber>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  pwdhash(overrides?: CallOverrides): Promise<BigNumber>;

  resetPassword(
    proof1: PromiseOrValue<BigNumberish>[],
    expiration1: PromiseOrValue<BigNumberish>,
    allhash1: PromiseOrValue<BigNumberish>,
    proof2: PromiseOrValue<BigNumberish>[],
    pwdhash2: PromiseOrValue<BigNumberish>,
    expiration2: PromiseOrValue<BigNumberish>,
    allhash2: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: UserOperationStruct,
    userOpHash: PromiseOrValue<BytesLike>,
    missingAccountFunds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verify(
    user: PromiseOrValue<string>,
    proof: PromiseOrValue<BigNumberish>[],
    datahash: PromiseOrValue<BigNumberish>,
    expiration: PromiseOrValue<BigNumberish>,
    allhash: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  zknonce(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    entryPoint(overrides?: CallOverrides): Promise<string>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    pwdhash(overrides?: CallOverrides): Promise<BigNumber>;

    resetPassword(
      proof1: PromiseOrValue<BigNumberish>[],
      expiration1: PromiseOrValue<BigNumberish>,
      allhash1: PromiseOrValue<BigNumberish>,
      proof2: PromiseOrValue<BigNumberish>[],
      pwdhash2: PromiseOrValue<BigNumberish>,
      expiration2: PromiseOrValue<BigNumberish>,
      allhash2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      user: PromiseOrValue<string>,
      proof: PromiseOrValue<BigNumberish>[],
      datahash: PromiseOrValue<BigNumberish>,
      expiration: PromiseOrValue<BigNumberish>,
      allhash: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    zknonce(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "SetPassword(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      pwdhash?: PromiseOrValue<BigNumberish> | null
    ): SetPasswordEventFilter;
    SetPassword(
      user?: PromiseOrValue<string> | null,
      pwdhash?: PromiseOrValue<BigNumberish> | null
    ): SetPasswordEventFilter;

    "Verified(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      nonce?: PromiseOrValue<BigNumberish> | null
    ): VerifiedEventFilter;
    Verified(
      user?: PromiseOrValue<string> | null,
      nonce?: PromiseOrValue<BigNumberish> | null
    ): VerifiedEventFilter;
  };

  estimateGas: {
    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    pwdhash(overrides?: CallOverrides): Promise<BigNumber>;

    resetPassword(
      proof1: PromiseOrValue<BigNumberish>[],
      expiration1: PromiseOrValue<BigNumberish>,
      allhash1: PromiseOrValue<BigNumberish>,
      proof2: PromiseOrValue<BigNumberish>[],
      pwdhash2: PromiseOrValue<BigNumberish>,
      expiration2: PromiseOrValue<BigNumberish>,
      allhash2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verify(
      user: PromiseOrValue<string>,
      proof: PromiseOrValue<BigNumberish>[],
      datahash: PromiseOrValue<BigNumberish>,
      expiration: PromiseOrValue<BigNumberish>,
      allhash: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    zknonce(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pwdhash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resetPassword(
      proof1: PromiseOrValue<BigNumberish>[],
      expiration1: PromiseOrValue<BigNumberish>,
      allhash1: PromiseOrValue<BigNumberish>,
      proof2: PromiseOrValue<BigNumberish>[],
      pwdhash2: PromiseOrValue<BigNumberish>,
      expiration2: PromiseOrValue<BigNumberish>,
      allhash2: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      user: PromiseOrValue<string>,
      proof: PromiseOrValue<BigNumberish>[],
      datahash: PromiseOrValue<BigNumberish>,
      expiration: PromiseOrValue<BigNumberish>,
      allhash: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    zknonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
