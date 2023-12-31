/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ImplFactoryInterface extends utils.Interface {
  functions: {
    "DEFAULT_WALLET()": FunctionFragment;
    "ECDSA_WALLET()": FunctionFragment;
    "ZKELASTIC_WALLET()": FunctionFragment;
    "computeAddress(string,bytes)": FunctionFragment;
    "createAccount(string,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_WALLET"
      | "ECDSA_WALLET"
      | "ZKELASTIC_WALLET"
      | "computeAddress"
      | "createAccount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_WALLET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ECDSA_WALLET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZKELASTIC_WALLET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "computeAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_WALLET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ECDSA_WALLET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZKELASTIC_WALLET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ImplFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  functions: {
    DEFAULT_WALLET(overrides?: CallOverrides): Promise<[string]>;

    ECDSA_WALLET(overrides?: CallOverrides): Promise<[string]>;

    ZKELASTIC_WALLET(overrides?: CallOverrides): Promise<[string]>;

    computeAddress(
      Type: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createAccount(
      Type: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_WALLET(overrides?: CallOverrides): Promise<string>;

  ECDSA_WALLET(overrides?: CallOverrides): Promise<string>;

  ZKELASTIC_WALLET(overrides?: CallOverrides): Promise<string>;

  computeAddress(
    Type: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  createAccount(
    Type: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_WALLET(overrides?: CallOverrides): Promise<string>;

    ECDSA_WALLET(overrides?: CallOverrides): Promise<string>;

    ZKELASTIC_WALLET(overrides?: CallOverrides): Promise<string>;

    computeAddress(
      Type: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    createAccount(
      Type: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    DEFAULT_WALLET(overrides?: CallOverrides): Promise<BigNumber>;

    ECDSA_WALLET(overrides?: CallOverrides): Promise<BigNumber>;

    ZKELASTIC_WALLET(overrides?: CallOverrides): Promise<BigNumber>;

    computeAddress(
      Type: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAccount(
      Type: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_WALLET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ECDSA_WALLET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZKELASTIC_WALLET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    computeAddress(
      Type: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAccount(
      Type: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
