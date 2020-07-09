/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DataTypesPureInterface extends ethers.utils.Interface {
  functions: {
    "pure_address()": FunctionFragment;
    "pure_bool()": FunctionFragment;
    "pure_bytes()": FunctionFragment;
    "pure_bytes1()": FunctionFragment;
    "pure_enum()": FunctionFragment;
    "pure_int256()": FunctionFragment;
    "pure_int8()": FunctionFragment;
    "pure_named()": FunctionFragment;
    "pure_stat_array()": FunctionFragment;
    "pure_string()": FunctionFragment;
    "pure_struct()": FunctionFragment;
    "pure_tuple()": FunctionFragment;
    "pure_uint256()": FunctionFragment;
    "pure_uint8()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "pure_address",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_bool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_bytes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_bytes1",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_enum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_int256",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_int8", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_named",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_stat_array",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_string",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_struct",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_tuple",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_uint256",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_uint8",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "pure_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_bool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pure_bytes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_bytes1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_enum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_int256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_int8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pure_named", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_stat_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pure_string",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pure_struct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_tuple", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_uint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_uint8", data: BytesLike): Result;

  events: {};
}

export class DataTypesPure extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DataTypesPureInterface;

  functions: {
    pure_address(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "pure_address()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    pure_bool(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "pure_bool()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    pure_bytes(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "pure_bytes()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    pure_bytes1(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "pure_bytes1()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    pure_enum(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "pure_enum()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    pure_int256(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "pure_int256()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    pure_int8(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "pure_int8()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    pure_named(
      overrides?: CallOverrides
    ): Promise<{
      uint256_1: BigNumber;
      uint256_2: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "pure_named()"(
      overrides?: CallOverrides
    ): Promise<{
      uint256_1: BigNumber;
      uint256_2: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    pure_stat_array(
      overrides?: CallOverrides
    ): Promise<{
      0: number[];
    }>;

    "pure_stat_array()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number[];
    }>;

    pure_string(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "pure_string()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    pure_struct(
      overrides?: CallOverrides
    ): Promise<{
      0: {
        uint256_0: BigNumber;
        uint256_1: BigNumber;
        0: BigNumber;
        1: BigNumber;
      };
    }>;

    "pure_struct()"(
      overrides?: CallOverrides
    ): Promise<{
      0: {
        uint256_0: BigNumber;
        uint256_1: BigNumber;
        0: BigNumber;
        1: BigNumber;
      };
    }>;

    pure_tuple(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "pure_tuple()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    pure_uint256(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "pure_uint256()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    pure_uint8(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "pure_uint8()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;
  };

  pure_address(overrides?: CallOverrides): Promise<string>;

  "pure_address()"(overrides?: CallOverrides): Promise<string>;

  pure_bool(overrides?: CallOverrides): Promise<boolean>;

  "pure_bool()"(overrides?: CallOverrides): Promise<boolean>;

  pure_bytes(overrides?: CallOverrides): Promise<string>;

  "pure_bytes()"(overrides?: CallOverrides): Promise<string>;

  pure_bytes1(overrides?: CallOverrides): Promise<string>;

  "pure_bytes1()"(overrides?: CallOverrides): Promise<string>;

  pure_enum(overrides?: CallOverrides): Promise<number>;

  "pure_enum()"(overrides?: CallOverrides): Promise<number>;

  pure_int256(overrides?: CallOverrides): Promise<BigNumber>;

  "pure_int256()"(overrides?: CallOverrides): Promise<BigNumber>;

  pure_int8(overrides?: CallOverrides): Promise<number>;

  "pure_int8()"(overrides?: CallOverrides): Promise<number>;

  pure_named(
    overrides?: CallOverrides
  ): Promise<{
    uint256_1: BigNumber;
    uint256_2: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "pure_named()"(
    overrides?: CallOverrides
  ): Promise<{
    uint256_1: BigNumber;
    uint256_2: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  pure_stat_array(overrides?: CallOverrides): Promise<number[]>;

  "pure_stat_array()"(overrides?: CallOverrides): Promise<number[]>;

  pure_string(overrides?: CallOverrides): Promise<string>;

  "pure_string()"(overrides?: CallOverrides): Promise<string>;

  pure_struct(
    overrides?: CallOverrides
  ): Promise<{
    uint256_0: BigNumber;
    uint256_1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "pure_struct()"(
    overrides?: CallOverrides
  ): Promise<{
    uint256_0: BigNumber;
    uint256_1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  pure_tuple(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "pure_tuple()"(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  pure_uint256(overrides?: CallOverrides): Promise<BigNumber>;

  "pure_uint256()"(overrides?: CallOverrides): Promise<BigNumber>;

  pure_uint8(overrides?: CallOverrides): Promise<number>;

  "pure_uint8()"(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    pure_address(overrides?: CallOverrides): Promise<string>;

    "pure_address()"(overrides?: CallOverrides): Promise<string>;

    pure_bool(overrides?: CallOverrides): Promise<boolean>;

    "pure_bool()"(overrides?: CallOverrides): Promise<boolean>;

    pure_bytes(overrides?: CallOverrides): Promise<string>;

    "pure_bytes()"(overrides?: CallOverrides): Promise<string>;

    pure_bytes1(overrides?: CallOverrides): Promise<string>;

    "pure_bytes1()"(overrides?: CallOverrides): Promise<string>;

    pure_enum(overrides?: CallOverrides): Promise<number>;

    "pure_enum()"(overrides?: CallOverrides): Promise<number>;

    pure_int256(overrides?: CallOverrides): Promise<BigNumber>;

    "pure_int256()"(overrides?: CallOverrides): Promise<BigNumber>;

    pure_int8(overrides?: CallOverrides): Promise<number>;

    "pure_int8()"(overrides?: CallOverrides): Promise<number>;

    pure_named(
      overrides?: CallOverrides
    ): Promise<{
      uint256_1: BigNumber;
      uint256_2: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "pure_named()"(
      overrides?: CallOverrides
    ): Promise<{
      uint256_1: BigNumber;
      uint256_2: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    pure_stat_array(overrides?: CallOverrides): Promise<number[]>;

    "pure_stat_array()"(overrides?: CallOverrides): Promise<number[]>;

    pure_string(overrides?: CallOverrides): Promise<string>;

    "pure_string()"(overrides?: CallOverrides): Promise<string>;

    pure_struct(
      overrides?: CallOverrides
    ): Promise<{
      uint256_0: BigNumber;
      uint256_1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "pure_struct()"(
      overrides?: CallOverrides
    ): Promise<{
      uint256_0: BigNumber;
      uint256_1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    pure_tuple(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "pure_tuple()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    pure_uint256(overrides?: CallOverrides): Promise<BigNumber>;

    "pure_uint256()"(overrides?: CallOverrides): Promise<BigNumber>;

    pure_uint8(overrides?: CallOverrides): Promise<number>;

    "pure_uint8()"(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    pure_address(): Promise<BigNumber>;
    pure_bool(): Promise<BigNumber>;
    pure_bytes(): Promise<BigNumber>;
    pure_bytes1(): Promise<BigNumber>;
    pure_enum(): Promise<BigNumber>;
    pure_int256(): Promise<BigNumber>;
    pure_int8(): Promise<BigNumber>;
    pure_named(): Promise<BigNumber>;
    pure_stat_array(): Promise<BigNumber>;
    pure_string(): Promise<BigNumber>;
    pure_struct(): Promise<BigNumber>;
    pure_tuple(): Promise<BigNumber>;
    pure_uint256(): Promise<BigNumber>;
    pure_uint8(): Promise<BigNumber>;
  };

  populateTransaction: {
    pure_address(): Promise<PopulatedTransaction>;
    pure_bool(): Promise<PopulatedTransaction>;
    pure_bytes(): Promise<PopulatedTransaction>;
    pure_bytes1(): Promise<PopulatedTransaction>;
    pure_enum(): Promise<PopulatedTransaction>;
    pure_int256(): Promise<PopulatedTransaction>;
    pure_int8(): Promise<PopulatedTransaction>;
    pure_named(): Promise<PopulatedTransaction>;
    pure_stat_array(): Promise<PopulatedTransaction>;
    pure_string(): Promise<PopulatedTransaction>;
    pure_struct(): Promise<PopulatedTransaction>;
    pure_tuple(): Promise<PopulatedTransaction>;
    pure_uint256(): Promise<PopulatedTransaction>;
    pure_uint8(): Promise<PopulatedTransaction>;
  };
}