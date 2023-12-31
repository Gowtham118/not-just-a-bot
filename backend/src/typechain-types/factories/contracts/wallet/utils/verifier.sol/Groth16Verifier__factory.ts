/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Groth16Verifier,
  Groth16VerifierInterface,
} from "../../../../../contracts/wallet/utils/verifier.sol/Groth16Verifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_pA",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "_pB",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "_pC",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[3]",
        name: "_pubSignals",
        type: "uint256[3]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610625806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806311479fea14610030575b600080fd5b61004361003e366004610589565b610057565b604051901515815260200160405180910390f35b600061051a565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47811061008f576000805260206000f35b50565b600060405183815284602082015285604082015260408160608360076107d05a03fa9150816100c5576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa915050806100f6576000805260206000f35b5050505050565b7f0b9736f7678df29acf5a8f87c5d9f470bee57f4c93390af6be310536de57a2e985527f18b896d189b6e8342fff7cf73bca49897e7899f4a43c45f3258531d66c7ae58b60208601526000608086018661019a87357f10f8d2a66db5d7eece966cb5341c2ff0d85070705065787865c31c31888fbaa77f0a45684dca59cd3f3c9347240b175521320e0f0f63b226e19a6b7e2f524bdc4984610092565b6101ea60208801357f03843fc2a6310c8e6504ff9392ba226ed7498d0e8dc36f8c52c5d8f46909850d7f1f667f4794d5ab62544c9e0be5dac6092edef4bcd4030e95cab005edc2f0fd9284610092565b61023a60408801357f19a3f0615fa7cc4a8f1600f1ffedb5518f90bc30515093e4a3c29a7a50cfc6607f22cc04bd64ea4e1b9e7b6e9d7d2002ea09c8c0345b056910e962903ccbf49d1484610092565b50823581527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4760208401357f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4703066020820152833560408201526020840135606082015260408401356080820152606084013560a08201527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e260c08201527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d192660e08201527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c6101008201527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab6101208201527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a76101408201527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8610160820152600087015161018082015260206000018701516101a08201527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101c08201527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101e08201527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102008201527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa610220820152843561024082015260208501356102608201527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26102808201527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6102a08201527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102c08201527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa6102e08201526020816103008360086107d05a03fa9051169695505050505050565b6040516103808101604052610532600084013561005e565b61053f602084013561005e565b61054c604084013561005e565b610559606084013561005e565b610566818486888a6100fd565b90508060005260206000f35b806040810183101561058357600080fd5b92915050565b6000806000806101608086880312156105a157600080fd5b6105ab8787610572565b945060c08601878111156105be57600080fd5b6040870194506105ce8882610572565b9350508681870111156105e057600080fd5b5092959194509261010001915056fea2646970667358221220f577d272dbd501581dca36af9fe4959c57ecac437c110bb284466c51c1fa7f7364736f6c63430008140033";

type Groth16VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Groth16VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Groth16Verifier__factory extends ContractFactory {
  constructor(...args: Groth16VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Groth16Verifier> {
    return super.deploy(overrides || {}) as Promise<Groth16Verifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Groth16Verifier {
    return super.attach(address) as Groth16Verifier;
  }
  override connect(signer: Signer): Groth16Verifier__factory {
    return super.connect(signer) as Groth16Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Groth16VerifierInterface {
    return new utils.Interface(_abi) as Groth16VerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Groth16Verifier {
    return new Contract(address, _abi, signerOrProvider) as Groth16Verifier;
  }
}
