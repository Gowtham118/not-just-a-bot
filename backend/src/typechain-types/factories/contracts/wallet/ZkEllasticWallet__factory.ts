/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ZkEllasticWallet,
  ZkEllasticWalletInterface,
} from "../../../contracts/wallet/ZkEllasticWallet";

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
        internalType: "uint256",
        name: "_pwdhash",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pwdhash",
        type: "uint256",
      },
    ],
    name: "SetPassword",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "Verified",
    type: "event",
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
    inputs: [],
    name: "pwdhash",
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
        internalType: "uint256[8]",
        name: "proof1",
        type: "uint256[8]",
      },
      {
        internalType: "uint256",
        name: "expiration1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allhash1",
        type: "uint256",
      },
      {
        internalType: "uint256[8]",
        name: "proof2",
        type: "uint256[8]",
      },
      {
        internalType: "uint256",
        name: "pwdhash2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allhash2",
        type: "uint256",
      },
    ],
    name: "resetPassword",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
      },
      {
        internalType: "uint256",
        name: "datahash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allhash",
        type: "uint256",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "zknonce",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a0604052604051610010906100a7565b604051809103906000f08015801561002c573d6000803e3d6000fd5b50600280546001600160a01b0319166001600160a01b039290921691909117905534801561005957600080fd5b506040516116dc3803806116dc833981016040819052610078916100cc565b6001600160a01b03928316608052600180546001600160a01b031916929093169190911790915560035561010f565b6106458061109783390190565b6001600160a01b03811681146100c957600080fd5b50565b6000806000606084860312156100e157600080fd5b83516100ec816100b4565b60208501519093506100fd816100b4565b80925050604084015190509250925092565b608051610f51610146600039600081816101940152818161021401528181610510015281816105c801526106d80152610f516000f3fe6080604052600436106100955760003560e01c8063affed0e011610059578063affed0e01461015c578063b0d691fe1461017a578063b2b9a488146101be578063b61d27f6146101d4578063d087d288146101f457600080fd5b806318dfb3c7146100a1578063375a0f0c146100c35780633a871cdd146100ec578063469c238c1461010c5780635c922c7e1461013c57600080fd5b3661009c57005b600080fd5b3480156100ad57600080fd5b506100c16100bc366004610a18565b610209565b005b3480156100cf57600080fd5b506100d960045481565b6040519081526020015b60405180910390f35b3480156100f857600080fd5b506100d9610107366004610a84565b610379565b34801561011857600080fd5b5061012c610127366004610b70565b61039f565b60405190151581526020016100e3565b34801561014857600080fd5b506100c1610157366004610bc2565b610483565b34801561016857600080fd5b506000546001600160f81b03166100d9565b34801561018657600080fd5b506040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016100e3565b3480156101ca57600080fd5b506100d960035481565b3480156101e057600080fd5b506100c16101ef366004610c2c565b610505565b34801561020057600080fd5b506100d96105c4565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102865760405162461bcd60e51b815260206004820152601a60248201527f6163636f756e743a206e6f7420616e20456e747279506f696e7400000000000060448201526064015b60405180910390fd5b8281146102cb5760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b604482015260640161027d565b60005b83811015610372576103608585838181106102eb576102eb610cb3565b90506020020160208101906103009190610cc9565b600085858581811061031457610314610cb3565b90506020028101906103269190610ce4565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061065d92505050565b8061036a81610d41565b9150506102ce565b5050505050565b60006103836106cd565b61038d8484610747565b9050610398826107e0565b9392505050565b6000824210156103b15750600061047a565b600060088446600454886040516020016103e4949392919093845260208401929092526040830152606082015260800190565b6040516020818303038152906040528051906020012060001c6104079190610d5a565b905061041786600354838661082d565b61042557600091505061047a565b6001600460008282546104389190610d7c565b90915550506004546040516001600160a01b038916907f7c4bd613345b3aec2140d4c4c96782cda06d72b1a593fbb20a72300354f4c33690600090a360019150505b95945050505050565b6004546000036104ab57600383905560016004556104a533856000858561039f565b506104cf565b6104b933886000898961039f565b5060038390556104cd33856000858561039f565b505b604051839033907f83c7dcbfcea2268ed68c3bcce0f9e0f891d6eed88b26725b87bc007e1c269f4790600090a350505050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461057d5760405162461bcd60e51b815260206004820152601a60248201527f6163636f756e743a206e6f7420616e20456e747279506f696e74000000000000604482015260640161027d565b6105be848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061065d92505050565b50505050565b60007f0000000000000000000000000000000000000000000000000000000000000000604051631aab3f0d60e11b8152306004820152600060248201526001600160a01b0391909116906335567e1a90604401602060405180830381865afa158015610634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106589190610d8f565b905090565b600080846001600160a01b031684846040516106799190610dcc565b60006040518083038185875af1925050503d80600081146106b6576040519150601f19603f3d011682016040523d82523d6000602084013e6106bb565b606091505b50915091508161037257805160208201fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107455760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161027d565b565b60006107736040518060400160405280600981526020016839b7b61039ba3ab33360b91b815250610923565b8161077d81610966565b6000808061078f610140880188610ce4565b81019061079c9190610de8565b60015492955090935091506107bd906001600160a01b03168486858561039f565b6107ce5760019450505050506107d7565b60009450505050505b92915050565b50565b80156107dd57604051600090339060001990849084818181858888f193505050503d8060008114610372576040519150601f19603f3d011682016040523d82523d6000602084013e610372565b6002546040805180820182528651815260208088015181830152825160808082018552898501518286019081526060808c01518185015290835285518087018752918b0151825260a08b015182850152828401919091528451808601865260c08b0151815260e08b0151818501528551918201865289825292810188905280850187905293516308a3cff560e11b81526000956001600160a01b0316946311479fea946108e294909392909190600401610e42565b602060405180830381865afa1580156108ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047a9190610ec6565b6107dd816040516024016109379190610ee8565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526109a7565b6107dd8160405160240161097c91815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f82c50f160e01b1790525b6107dd8160006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b60008083601f8401126109de57600080fd5b50813567ffffffffffffffff8111156109f657600080fd5b6020830191508360208260051b8501011115610a1157600080fd5b9250929050565b60008060008060408587031215610a2e57600080fd5b843567ffffffffffffffff80821115610a4657600080fd5b610a52888389016109cc565b90965094506020870135915080821115610a6b57600080fd5b50610a78878288016109cc565b95989497509550505050565b600080600060608486031215610a9957600080fd5b833567ffffffffffffffff811115610ab057600080fd5b84016101608187031215610ac357600080fd5b95602085013595506040909401359392505050565b80356001600160a01b0381168114610aef57600080fd5b919050565b600082601f830112610b0557600080fd5b60405161010080820182811067ffffffffffffffff82111715610b3857634e487b7160e01b600052604160045260246000fd5b60405283018185821115610b4b57600080fd5b845b82811015610b65578035825260209182019101610b4d565b509195945050505050565b60008060008060006101808688031215610b8957600080fd5b610b9286610ad8565b9450610ba18760208801610af4565b94979496505050506101208301359261014081013592610160909101359150565b60008060008060008060006102a0888a031215610bde57600080fd5b610be88989610af4565b965061010088013595506101208801359450610c08896101408a01610af4565b96999598509396610240810135956102608201359550610280909101359350915050565b60008060008060608587031215610c4257600080fd5b610c4b85610ad8565b935060208501359250604085013567ffffffffffffffff80821115610c6f57600080fd5b818701915087601f830112610c8357600080fd5b813581811115610c9257600080fd5b886020828501011115610ca457600080fd5b95989497505060200194505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610cdb57600080fd5b61039882610ad8565b6000808335601e19843603018112610cfb57600080fd5b83018035915067ffffffffffffffff821115610d1657600080fd5b602001915036819003821315610a1157600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610d5357610d53610d2b565b5060010190565b600082610d7757634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156107d7576107d7610d2b565b600060208284031215610da157600080fd5b5051919050565b60005b83811015610dc3578181015183820152602001610dab565b50506000910152565b60008251610dde818460208701610da8565b9190910192915050565b60008060006101408486031215610dfe57600080fd5b610e088585610af4565b956101008501359550610120909401359392505050565b8060005b60028110156105be578151845260209384019390910190600101610e23565b6101608101610e518287610e1f565b60408083018660005b6002811015610e8157610e6e838351610e1f565b9183019160209190910190600101610e5a565b50505050610e9260c0830185610e1f565b61010082018360005b6003811015610eba578151835260209283019290910190600101610e9b565b50505095945050505050565b600060208284031215610ed857600080fd5b8151801515811461039857600080fd5b6020815260008251806020840152610f07816040850160208701610da8565b601f01601f1916919091016040019291505056fea2646970667358221220d6241ffd3b4417f20c4ab0f5709bb1f9c79c9c76367a20fed36aa41306a5b05664736f6c63430008140033608060405234801561001057600080fd5b50610625806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806311479fea14610030575b600080fd5b61004361003e366004610589565b610057565b604051901515815260200160405180910390f35b600061051a565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47811061008f576000805260206000f35b50565b600060405183815284602082015285604082015260408160608360076107d05a03fa9150816100c5576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa915050806100f6576000805260206000f35b5050505050565b7f0b9736f7678df29acf5a8f87c5d9f470bee57f4c93390af6be310536de57a2e985527f18b896d189b6e8342fff7cf73bca49897e7899f4a43c45f3258531d66c7ae58b60208601526000608086018661019a87357f10f8d2a66db5d7eece966cb5341c2ff0d85070705065787865c31c31888fbaa77f0a45684dca59cd3f3c9347240b175521320e0f0f63b226e19a6b7e2f524bdc4984610092565b6101ea60208801357f03843fc2a6310c8e6504ff9392ba226ed7498d0e8dc36f8c52c5d8f46909850d7f1f667f4794d5ab62544c9e0be5dac6092edef4bcd4030e95cab005edc2f0fd9284610092565b61023a60408801357f19a3f0615fa7cc4a8f1600f1ffedb5518f90bc30515093e4a3c29a7a50cfc6607f22cc04bd64ea4e1b9e7b6e9d7d2002ea09c8c0345b056910e962903ccbf49d1484610092565b50823581527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4760208401357f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4703066020820152833560408201526020840135606082015260408401356080820152606084013560a08201527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e260c08201527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d192660e08201527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c6101008201527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab6101208201527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a76101408201527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8610160820152600087015161018082015260206000018701516101a08201527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101c08201527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101e08201527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102008201527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa610220820152843561024082015260208501356102608201527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26102808201527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6102a08201527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102c08201527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa6102e08201526020816103008360086107d05a03fa9051169695505050505050565b6040516103808101604052610532600084013561005e565b61053f602084013561005e565b61054c604084013561005e565b610559606084013561005e565b610566818486888a6100fd565b90508060005260206000f35b806040810183101561058357600080fd5b92915050565b6000806000806101608086880312156105a157600080fd5b6105ab8787610572565b945060c08601878111156105be57600080fd5b6040870194506105ce8882610572565b9350508681870111156105e057600080fd5b5092959194509261010001915056fea2646970667358221220f577d272dbd501581dca36af9fe4959c57ecac437c110bb284466c51c1fa7f7364736f6c63430008140033";

type ZkEllasticWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZkEllasticWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZkEllasticWallet__factory extends ContractFactory {
  constructor(...args: ZkEllasticWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    entryPoint_: PromiseOrValue<string>,
    owner_: PromiseOrValue<string>,
    _pwdhash: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZkEllasticWallet> {
    return super.deploy(
      entryPoint_,
      owner_,
      _pwdhash,
      overrides || {}
    ) as Promise<ZkEllasticWallet>;
  }
  override getDeployTransaction(
    entryPoint_: PromiseOrValue<string>,
    owner_: PromiseOrValue<string>,
    _pwdhash: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      entryPoint_,
      owner_,
      _pwdhash,
      overrides || {}
    );
  }
  override attach(address: string): ZkEllasticWallet {
    return super.attach(address) as ZkEllasticWallet;
  }
  override connect(signer: Signer): ZkEllasticWallet__factory {
    return super.connect(signer) as ZkEllasticWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZkEllasticWalletInterface {
    return new utils.Interface(_abi) as ZkEllasticWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZkEllasticWallet {
    return new Contract(address, _abi, signerOrProvider) as ZkEllasticWallet;
  }
}
