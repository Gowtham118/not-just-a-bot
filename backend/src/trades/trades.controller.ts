import { Controller, Post } from '@nestjs/common';
import { TradesService } from './trades.service';

@Controller('trades')
export class TradesController {
  constructor(private readonly tradesService: TradesService) {}

  @Post('executeTrades')
  async executeTrades() {
    return 'c';
  }

  @Post('getTrades')
  async getTrades() {
    return 'c';
  }

  @Post('abortOrRun')
  async abortOrRun() {
    return 'c';
  }
}
