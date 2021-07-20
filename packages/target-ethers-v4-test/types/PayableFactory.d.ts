/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
/*
  These types correspond to solidity contract code from source file:
  ../../contracts/compiled/PayableFactory.abi
*/

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from ".";

interface PayableFactoryInterface extends Interface {
  functions: {
    newPayable: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export class PayableFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PayableFactory;
  attach(addressOrName: string): PayableFactory;
  deployed(): Promise<PayableFactory>;

  on(event: EventFilter | string, listener: Listener): PayableFactory;
  once(event: EventFilter | string, listener: Listener): PayableFactory;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): PayableFactory;
  removeAllListeners(eventName: EventFilter | string): PayableFactory;
  removeListener(eventName: any, listener: Listener): PayableFactory;

  interface: PayableFactoryInterface;

  functions: {
    newPayable(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    "newPayable()"(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  newPayable(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  "newPayable()"(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    newPayable(overrides?: TransactionOverrides): Promise<BigNumber>;

    "newPayable()"(overrides?: TransactionOverrides): Promise<BigNumber>;
  };
}
