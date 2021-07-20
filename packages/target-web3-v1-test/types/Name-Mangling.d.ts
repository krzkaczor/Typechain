/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
/*
  These types correspond to solidity contract code from source file:
  ../../contracts/compiled/Name-Mangling.abi
*/

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface NameMangling extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): NameMangling;
  clone(): NameMangling;
  methods: {
    provider(): NonPayableTransactionObject<boolean>;

    works(): NonPayableTransactionObject<boolean>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
