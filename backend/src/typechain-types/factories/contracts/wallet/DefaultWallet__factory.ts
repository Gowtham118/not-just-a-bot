/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DefaultWallet,
  DefaultWalletInterface,
} from "../../../contracts/wallet/DefaultWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint_",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "string",
        name: "uuid",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccountUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162000df138038062000df18339810160408190526200003491620000e6565b6001600160a01b03838116608052600180546001600160a01b0319169184169190911790556040516200006c908290602001620001cb565b60408051601f19818403018152919052805160209091012060a05250620001e9915050565b6001600160a01b0381168114620000a757600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000dd578181015183820152602001620000c3565b50506000910152565b600080600060608486031215620000fc57600080fd5b8351620001098162000091565b60208501519093506200011c8162000091565b60408501519092506001600160401b03808211156200013a57600080fd5b818601915086601f8301126200014f57600080fd5b815181811115620001645762000164620000aa565b604051601f8201601f19908116603f011681019083821181831017156200018f576200018f620000aa565b81604052828152896020848701011115620001a957600080fd5b620001bc836020830160208801620000c0565b80955050505050509250925092565b60008251620001df818460208701620000c0565b9190910192915050565b60805160a051610bc76200022a600039600060b4015260008181610141015281816101ab01528181610341015281816103f901526105090152610bc76000f3fe6080604052600436106100745760003560e01c8063affed0e01161004e578063affed0e014610109578063b0d691fe14610127578063b61d27f61461016b578063d087d2881461018b57600080fd5b806318dfb3c714610080578063377fd247146100a25780633a871cdd146100e957600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b366004610931565b6101a0565b005b3480156100ae57600080fd5b506100d67f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100f557600080fd5b506100d661010436600461099d565b610310565b34801561011557600080fd5b506000546001600160f81b03166100d6565b34801561013357600080fd5b506040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016100e0565b34801561017757600080fd5b506100a0610186366004610a0d565b610336565b34801561019757600080fd5b506100d66103f5565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461021d5760405162461bcd60e51b815260206004820152601a60248201527f6163636f756e743a206e6f7420616e20456e747279506f696e7400000000000060448201526064015b60405180910390fd5b8281146102625760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b6044820152606401610214565b60005b83811015610309576102f785858381811061028257610282610a94565b90506020020160208101906102979190610aaa565b60008585858181106102ab576102ab610a94565b90506020028101906102bd9190610ac5565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061048e92505050565b8061030181610b0c565b915050610265565b5050505050565b600061031a6104fe565b6103248484610578565b905061032f82610628565b9392505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103ae5760405162461bcd60e51b815260206004820152601a60248201527f6163636f756e743a206e6f7420616e20456e747279506f696e740000000000006044820152606401610214565b6103ef848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061048e92505050565b50505050565b60007f0000000000000000000000000000000000000000000000000000000000000000604051631aab3f0d60e11b8152306004820152600060248201526001600160a01b0391909116906335567e1a90604401602060405180830381865afa158015610465573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104899190610b33565b905090565b600080846001600160a01b031684846040516104aa9190610b4c565b60006040518083038185875af1925050503d80600081146104e7576040519150601f19603f3d011682016040523d82523d6000602084013e6104ec565b606091505b50915091508161030957805160208201fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105765760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610214565b565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c81206001546001600160a01b03166106016105c4610140870187610ac5565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525086939250506106759050565b6001600160a01b03161461061957600191505061061f565b60009150505b92915050565b50565b801561062557604051600090339060001990849084818181858888f193505050503d8060008114610309576040519150601f19603f3d011682016040523d82523d6000602084013e610309565b60008060006106848585610699565b91509150610691816106de565b509392505050565b60008082516041036106cf5760208301516040840151606085015160001a6106c387828585610828565b945094505050506106d7565b506000905060025b9250929050565b60008160048111156106f2576106f2610b7b565b036106fa5750565b600181600481111561070e5761070e610b7b565b0361075b5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610214565b600281600481111561076f5761076f610b7b565b036107bc5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610214565b60038160048111156107d0576107d0610b7b565b036106255760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610214565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561085f57506000905060036108e3565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156108b3573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166108dc576000600192509250506108e3565b9150600090505b94509492505050565b60008083601f8401126108fe57600080fd5b50813567ffffffffffffffff81111561091657600080fd5b6020830191508360208260051b85010111156106d757600080fd5b6000806000806040858703121561094757600080fd5b843567ffffffffffffffff8082111561095f57600080fd5b61096b888389016108ec565b9096509450602087013591508082111561098457600080fd5b50610991878288016108ec565b95989497509550505050565b6000806000606084860312156109b257600080fd5b833567ffffffffffffffff8111156109c957600080fd5b840161016081870312156109dc57600080fd5b95602085013595506040909401359392505050565b80356001600160a01b0381168114610a0857600080fd5b919050565b60008060008060608587031215610a2357600080fd5b610a2c856109f1565b935060208501359250604085013567ffffffffffffffff80821115610a5057600080fd5b818701915087601f830112610a6457600080fd5b813581811115610a7357600080fd5b886020828501011115610a8557600080fd5b95989497505060200194505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610abc57600080fd5b61032f826109f1565b6000808335601e19843603018112610adc57600080fd5b83018035915067ffffffffffffffff821115610af757600080fd5b6020019150368190038213156106d757600080fd5b600060018201610b2c57634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610b4557600080fd5b5051919050565b6000825160005b81811015610b6d5760208186018101518583015201610b53565b506000920191825250919050565b634e487b7160e01b600052602160045260246000fdfea26469706673582212205b6cf747bf59baae3d515d67720b2247e43c0127163e954024708e61f5a8eb6664736f6c63430008140033";

type DefaultWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DefaultWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DefaultWallet__factory extends ContractFactory {
  constructor(...args: DefaultWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    entryPoint_: PromiseOrValue<string>,
    owner_: PromiseOrValue<string>,
    uuid: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DefaultWallet> {
    return super.deploy(
      entryPoint_,
      owner_,
      uuid,
      overrides || {}
    ) as Promise<DefaultWallet>;
  }
  override getDeployTransaction(
    entryPoint_: PromiseOrValue<string>,
    owner_: PromiseOrValue<string>,
    uuid: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      entryPoint_,
      owner_,
      uuid,
      overrides || {}
    );
  }
  override attach(address: string): DefaultWallet {
    return super.attach(address) as DefaultWallet;
  }
  override connect(signer: Signer): DefaultWallet__factory {
    return super.connect(signer) as DefaultWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefaultWalletInterface {
    return new utils.Interface(_abi) as DefaultWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefaultWallet {
    return new Contract(address, _abi, signerOrProvider) as DefaultWallet;
  }
}