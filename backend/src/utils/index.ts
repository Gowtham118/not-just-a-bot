import { ethers } from 'ethers';
import { WalletType } from 'src/user/dto';
import { AddressConfig, RPC } from 'src/user/dto/contants';

export function GetAccountInitData(
  type: WalletType,
  identifier: string,
  systemKey: string,
) {
  const entrypoint = AddressConfig.Entrypoint;
  switch (type) {
    case WalletType.zkEllasticWallet:
      return ethers.utils.defaultAbiCoder.encode(
        ['address', 'address', 'uint'],
        [entrypoint, systemKey, identifier],
      );
    case WalletType.ecdsaWallet:
      return ethers.utils.defaultAbiCoder.encode(
        ['address', 'address', 'address'],
        [entrypoint, systemKey, identifier],
      );
    case WalletType.custodial:
      return '';
    case WalletType.defaultWallet:
      return ethers.utils.defaultAbiCoder.encode(
        ['address', 'address', 'string'],
        [entrypoint, systemKey, identifier],
      );
    default:
      throw new Error('Invalid wallet type');
  }
}

export async function getBalance(
  chainId: number,
  address: string,
): Promise<string> {
  // Create a provider for the specified chainId
  const provider = new ethers.providers.JsonRpcProvider(RPC[chainId]);
  console.log(RPC[chainId]);

  // Get the balance of the address
  const balance = await provider.getBalance(address);

  // Format the balance from wei to ether
  const balanceInEth = ethers.utils.formatEther(balance);

  return balanceInEth;
}
