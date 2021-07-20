/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
/*
  These types correspond to solidity contract code from source file:
  ../../contracts/compiled/PayableFactory.abi
*/

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Overloads, OverloadsInterface } from "../Overloads";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "input1",
        type: "int256",
      },
    ],
    name: "overload1",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "input2",
        type: "uint256",
      },
    ],
    name: "overload1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class Overloads__factory {
  static readonly abi = _abi;
  static createInterface(): OverloadsInterface {
    return new utils.Interface(_abi) as OverloadsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Overloads {
    return new Contract(address, _abi, signerOrProvider) as Overloads;
  }
}
