import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CustodialTxObject,
  SubmitTxDTO,
  UserOpDto,
  WalletDTO,
  WalletType,
} from './dto';
import { ReturnWallet, UserOps } from './dto/Typings';
import { ethers } from 'ethers';
import { AddressConfig, RPC } from './dto/contants';
import { EntryPoint, ImplFactory } from 'src/typechain-types';
import { WalletFactoryAbi } from 'abi/walletFactory';
import { GetAccountInitData, getBalance } from 'src/utils';
import { entrypointAbi } from 'abi/entrypoint';

/**
 * Userservice service to handle user related CRUD
 */
@Injectable()
export class UserService {
  private implFactory: ImplFactory;
  private entrypoint: EntryPoint;
  private systemAccount: ethers.Wallet;
  constructor(private postgre: PrismaService, private config: ConfigService) {
    const provider = new ethers.providers.JsonRpcProvider(RPC[1]);
    this.implFactory = new ethers.Contract(
      AddressConfig.ImplFactory,
      WalletFactoryAbi,
      provider,
    ) as ImplFactory;

    this.entrypoint = new ethers.Contract(
      AddressConfig.Entrypoint,
      entrypointAbi,
      provider,
    ) as EntryPoint;

    this.systemAccount = new ethers.Wallet(
      this.config.get('SERVER_ACCOUNT_PRIV'),
      provider,
    );
  }

  // get Wallet based on GetWalletDTO
  async getWallet(walletConfig: WalletDTO): Promise<ReturnWallet> {
    let authSlug = this.GetAuthSlug(
      walletConfig.Wallet_type,
      walletConfig.Value,
    );
    const wallet = await this.postgre.usertable.findUnique({
      where: {
        authslug: authSlug,
      },
    });

    if (!wallet) {
      throw new Error('Wallet not found');
    }

    return {
      address: wallet.accountAddress,
      balance: await getBalance(walletConfig.chaindId, wallet.accountAddress),
    };
  }

  async createWallet(walletConfig: WalletDTO): Promise<ReturnWallet> {
    let authSlug = this.GetAuthSlug(
      walletConfig.Wallet_type,
      walletConfig.Value,
    );
    let systemKey = this.config.get('SERVER_ACCOUNT_PRIV');
    let accountAddress = await this.computeAddress(
      walletConfig.Wallet_type,
      walletConfig.Value,
      systemKey,
    );
    switch (walletConfig.Wallet_type) {
      case WalletType.custodial:
        systemKey = authSlug;
        accountAddress = ethers.utils.computeAddress(authSlug);
        break;
      default:
        throw new Error('Invalid wallet type');
    }
    const wallet = await this.postgre.usertable.findUnique({
      where: {
        authslug: authSlug,
      },
    });

    if (wallet) {
      throw new Error('Wallet already exists');
    }

    const newWallet = await this.postgre.usertable.create({
      data: {
        accountAddress: accountAddress,
        authslug: authSlug,
        systemKey: systemKey,
        authType: walletConfig.Wallet_type,
      },
    });

    return {
      address: newWallet.accountAddress,
      balance: await getBalance(
        walletConfig.chaindId,
        newWallet.accountAddress,
      ),
    };
  }

  async submitTx(TxObject: UserOpDto): Promise<string> {
    if (TxObject.Wallet_type === WalletType.custodial) {
      throw new Error('Custodial wallet not supported');
    }
    let authSlug = this.GetAuthSlug(TxObject.Wallet_type, TxObject.Value);

    const wallet = await this.postgre.usertable.findUnique({
      where: {
        authslug: authSlug,
      },
    });

    if (!wallet) {
      throw new Error('Wallet not found');
    }

    if (TxObject.sender != wallet.accountAddress) {
      throw new Error('Invalid sender');
    }

    const { Wallet_type, Value, chaindId, ...userOps } = TxObject;
    const signature = await this.GetSignature(userOps, Wallet_type);
    userOps.signature = signature;

    try {
      const tx = await this.entrypoint
        .connect(this.systemAccount)
        .handleOps([userOps], this.systemAccount.address);
      await tx.wait();
      return tx.hash;
    } catch (error) {
      throw new Error(error);
    }
  }

  async submitCustodialTx(TxObject: CustodialTxObject): Promise<string> {
    if (TxObject.Wallet_type !== WalletType.custodial) {
      throw new Error('non Custodial wallet not supported for this route');
    }

    let authSlug = this.GetAuthSlug(TxObject.Wallet_type, TxObject.Value);

    const wallet = await this.postgre.usertable.findUnique({
      where: {
        authslug: authSlug,
      },
    });

    if (!wallet) {
      throw new Error('Wallet not found');
    }

    const userWallet = new ethers.Wallet(
      wallet.systemKey,
      new ethers.providers.JsonRpcProvider(RPC[TxObject.chaindId]),
    );

    try {
      const tx = await userWallet.sendTransaction({
        to: TxObject.to,
        value: TxObject.value,
        data: TxObject.data,
      });
      await tx.wait();
      return tx.hash;
    } catch (error) {
      throw new Error(error);
    }
  }

  // take a string concat it with server secret and hash it with ethers keccak function name GethAuthSlug
  GetAuthSlug(type: WalletType, identifier: string): string {
    switch (type) {
      case WalletType.zkEllasticWallet || WalletType.ecdsaWallet:
        return identifier;
      case WalletType.custodial || WalletType.defaultWallet:
        const preHashSlug = identifier + this.config.get('SERVER_SECRET');
        const hashedSlug = ethers.utils.keccak256(preHashSlug);
        return hashedSlug;
      default:
        throw new Error('Invalid wallet type');
    }
  }

  async computeAddress(
    type: WalletType,
    identifier: string,
    systemKey: string,
  ): Promise<string> {
    if (type === WalletType.custodial) {
      return identifier;
    }
    const data = GetAccountInitData(type, identifier, systemKey);
    const address = await this.implFactory.computeAddress(type, data);
    if (address === ethers.constants.AddressZero) {
      throw new Error('Invalid wallet type');
    }
    return address;
  }

  async GetSignature(
    userOps: UserOps,
    walletType: WalletType,
  ): Promise<string> {
    switch (walletType) {
      case WalletType.defaultWallet || WalletType.ecdsaWallet:
        let userOpHash = await this.entrypoint.getUserOpHash({
          ...userOps,
          signature: '0x',
        });
        const OwnerSign = await this.systemAccount.signMessage(
          ethers.utils.arrayify(userOpHash),
        );
        return (
          '0x' +
          OwnerSign.replace('0x', '') +
          userOps.signature.replace('0x', '')
        );

      case WalletType.zkEllasticWallet:
        return userOps.signature;
    }
  }
}
