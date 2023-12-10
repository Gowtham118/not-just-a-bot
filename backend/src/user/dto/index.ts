import {
  IsEnum,
  IsEthereumAddress,
  IsHexadecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateIf,
  isEnum,
} from 'class-validator';

export enum WalletType {
  zkEllasticWallet = 'zkEllasticWallet',
  ecdsaWallet = 'ecdsaWallet',
  defaultWallet = 'defaultWallet',
  custodial = 'custodial',
}

export class WalletDTO {
  @IsNotEmpty()
  @IsEnum(WalletType)
  Wallet_type: WalletType;

  @IsNotEmpty()
  @IsString()
  @ValidateIf((o) => o.Wallet_type === WalletType.ecdsaWallet)
  @IsEthereumAddress()
  Value: string;

  @IsNotEmpty()
  @IsNumber()
  chaindId: number;
}

export class SubmitTxDTO extends WalletDTO {
  @IsNotEmpty()
  @IsString()
  @IsHexadecimal()
  callData: string;
}

export class UserOpDto extends WalletDTO {
  @IsNotEmpty()
  @IsString()
  @IsEthereumAddress()
  sender: string;

  @IsNotEmpty()
  @IsNumber()
  nonce: number;

  @IsNotEmpty()
  @IsString()
  initCode: string;

  @IsNotEmpty()
  @IsString()
  @IsHexadecimal()
  callData: string;

  @IsNotEmpty()
  @IsNumber()
  callGasLimit: number;

  @IsNotEmpty()
  @IsNumber()
  verificationGasLimit: number;

  @IsNotEmpty()
  @IsNumber()
  preVerificationGas: number;

  @IsNotEmpty()
  @IsNumber()
  maxFeePerGas: number;

  @IsNotEmpty()
  @IsNumber()
  maxPriorityFeePerGas: number;

  @IsNotEmpty()
  @IsString()
  paymasterAndData: string;

  @IsNotEmpty()
  @IsString()
  signature: string;
}

export class CustodialTxObject extends WalletDTO {
  @IsNotEmpty()
  @IsString()
  @IsEthereumAddress()
  to: string;

  @IsNotEmpty()
  @IsNumber()
  value: string;

  @IsNotEmpty()
  @IsString()
  @IsHexadecimal()
  data: string;
}
