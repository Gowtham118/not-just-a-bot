import { Controller, Get, Post } from '@nestjs/common';
import { SwapService } from './swap.service';

@Controller('swap')
export class SwapController {
  constructor(private swapService: SwapService) {}

  @Get('GetRoutes')
  async getRoutes() {
    return this.swapService.getRoutes;
  }

  @Post('executeSwap')
  async executeSwap() {
    return this.swapService.executeSwap;
  }

  @Post('GetSwapStatus')
  async getSwapStatus() {
    return this.swapService.getStatus;
  }

  @Post('resume-swap')
  async resumeSwap() {
    return this.swapService.resumeSwap;
  }
}
