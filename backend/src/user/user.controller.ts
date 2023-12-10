import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CustodialTxObject, UserOpDto, WalletDTO } from './dto';
import { ReturnWallet } from './dto/Typings';

/**
 * Controller for User routs
 */
// types of wallet zkellastic , metamask , Oauth , non custodial
@Controller('wallet')
export class UserController {
  constructor(private userService: UserService) {}

  // users sends their payload and we check db and respond with their wallet details
  @Post('get-wallet')
  async getWallet(@Body() walletConfig: WalletDTO): Promise<ReturnWallet> {
    return this.userService.getWallet(walletConfig);
  }

  @Post('create-wallet')
  async createWallet(@Body() walletConfig: WalletDTO): Promise<ReturnWallet> {
    return this.userService.createWallet(walletConfig);
  }

  @Post('submitTx')
  async submitTx(@Body() TxObject: UserOpDto): Promise<string> {
    return this.userService.submitTx(TxObject);
  }

  @Post('submitCustodialTx')
  async submitCustodialTx(
    @Body() TxObject: CustodialTxObject,
  ): Promise<string> {
    return this.userService.submitCustodialTx(TxObject);
  }

  // unimplemented for now
  @Get('balance/:asset')
  async getBalance() {
    return 'c';
  }

  // will remove this route eventually and have it as service
  // unimplemented for now

  @Post('transfer')
  async transfer() {
    return 'c';
  }
}
